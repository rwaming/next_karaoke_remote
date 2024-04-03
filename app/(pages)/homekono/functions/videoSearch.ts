import { type VideoInfos, type SetState, type SearchInfo } from '@/utils/Types'
import { exceedQuotaMessage, qFilterKeyword } from '@/utils/utilities'
import { decode } from 'html-entities'

function isVideoInfos(value: SearchInfo): value is VideoInfos {
  return value.every((info) => typeof info === 'object')
}

async function getSearchInfo(
  searchKeyword: string,
  setPlayerState: SetState<string>,
): Promise<SearchInfo> {
  const param = {
    part: 'snippet',
    channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
    maxResults: 20,
    type: 'video',
    videoEmbeddable: 'true',
    q: `${searchKeyword} ${qFilterKeyword}`,
  }
  const fetchSearchResult = await fetch(
    `/homekono/api?part=${param.part}&channelId=${param.channelId}&maxResults=${param.maxResults}&type=${param.type}&videoEmbeddable=${param.videoEmbeddable}&q=${param.q}`,
  )
  const searchResult = await fetchSearchResult.json()

  const result = searchResult.error?.message.includes('quota') === true ?? false
  if (result) {
    setPlayerState(exceedQuotaMessage)
  } else {
    const listLengthAll: number = searchResult.pageInfo.totalResults
    const listLength = searchResult.pageInfo.resultsPerPage

    const videoInfos: VideoInfos = [...Array(listLength)].map((v, i) => {
      const videos = searchResult.items
      const video = videos[i]
      const id: string = video.id.videoId
      const date: string = video.snippet.publishedAt
      const rawTitle: string = video.snippet.title
      const wholeTitle: string = decode(rawTitle)
      // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

      let divided
      if (wholeTitle.includes('(KY.')) {
        divided = wholeTitle.split('(KY.')
      } else if (wholeTitle.includes('[KY')) {
        divided = wholeTitle.split('[KY')
      } else {
        divided = wholeTitle.split(')')
      }
      const titleArtist = divided[0].trim().split('-')
      let title = titleArtist[0].trim()
      let artist = titleArtist.slice(1).join('')
      let number = divided[1].trim().split(')')[0]
      if (title === '') {
        title = 'x'
      }
      if (artist === '') {
        artist = 'x'
      }
      if (Number.isNaN(Number(number))) {
        number = 'x'
      }
      if (title === 'x' && artist === 'x' && number === 'x') {
        title = wholeTitle
      }

      const videoInfo = {
        id,
        title,
        artist,
        number,
        date,
      }
      return videoInfo
    })

    const searchInfo: SearchInfo = [...videoInfos]
    searchInfo.push(listLengthAll)
    return searchInfo
  }
  return [-1]
}

export default async function videoSearch(
  searchKeyword: string,
  setPlayerState: SetState<string>,
  setVideoInfos: SetState<VideoInfos>,
  setVideoAllLength: SetState<number>,
): Promise<void> {
  const searchInfo = await getSearchInfo(searchKeyword, setPlayerState)

  const getVideoAllLength = searchInfo.pop()
  if (isVideoInfos(searchInfo)) {
    setVideoInfos(searchInfo)
  }
  if (typeof getVideoAllLength === 'number') {
    setVideoAllLength(getVideoAllLength)
  } else {
    setVideoAllLength(-2)
  }
}
