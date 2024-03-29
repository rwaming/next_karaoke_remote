import { type MouseEvent } from 'react'
import {
  type VideoInfos,
  type Input,
  type UseRef,
  type SetState,
  type SearchInfo,
} from '../utils/Types'

function isVideoInfos(value: SearchInfo): value is VideoInfos {
  return value.every((info) => typeof info === 'object')
}

async function getSearchInfo(
  event: MouseEvent,
  setVideoID: SetState<string>,
  searchValueRef: UseRef<Input>,
): Promise<SearchInfo> {
  const searchKeyword = searchValueRef.current?.value.trim() ?? ''

  if (searchKeyword !== '') {
    event.preventDefault()
    const param = {
      part: 'snippet',
      channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
      maxResults: 20,
      type: 'video',
      videoEmbeddable: 'true',
      q: `${searchKeyword} KY Karaoke -노래방챌린지`,
    }
    const fetchSearchResult = await fetch(
      `/api?part=${param.part}&channelId=${param.channelId}&maxResults=${param.maxResults}&type=${param.type}&videoEmbeddable=${param.videoEmbeddable}&q=${param.q}`,
    )
    const searchResult = await fetchSearchResult.json()

    const result =
      searchResult.error?.message.includes('quota') === true ?? false
    if (result) {
      setVideoID(
        'Error: 지금은 서비스를 이용할 수 없습니다. 잠시 후에 다시 시도해주십시오.',
      )
    } else {
      const listLengthAll: number = searchResult.pageInfo.totalResults
      const listLength = searchResult.pageInfo.resultsPerPage

      const videoInfos: VideoInfos = [...Array(listLength)].map((v, i) => {
        const videos = searchResult.items
        const video = videos[i]
        const videoID: string = video.id.videoId
        const videoDate: string = video.snippet.publishedAt
        const videoTitle: string = video.snippet.title
        // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

        let divided
        if (videoTitle.includes('(KY.')) {
          divided = videoTitle.split('(KY.')
        } else if (videoTitle.includes('[KY')) {
          divided = videoTitle.split('[KY')
        } else {
          divided = videoTitle.split(')')
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
          title = videoTitle
        }

        const videoInfo = {
          id: videoID,
          title,
          artist,
          number,
          date: videoDate,
        }
        return videoInfo
      })

      const searchInfo: SearchInfo = [...videoInfos]
      searchInfo.push(listLengthAll)
      return searchInfo
    }
  }
  return [-1]
}

export default async function searchVideos(
  event: MouseEvent,
  {
    setVideoID,
    setVideoInfos,
    searchValueRef,
    setVideoAllLength,
  }: {
    setVideoID: SetState<string>
    setVideoInfos: SetState<VideoInfos>
    searchValueRef: UseRef<Input>
    setVideoAllLength: SetState<number>
  },
): Promise<void> {
  const searchInfo = await getSearchInfo(event, setVideoID, searchValueRef)

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
