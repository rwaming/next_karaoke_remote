import { gapi } from 'gapi-script'
import { type MutableRefObject, type MouseEvent } from 'react'
import { type VideoInfo } from '@/utils/Types'

export default async function searchVideo(
  event: MouseEvent,
  searchValueRef: MutableRefObject<HTMLInputElement | null> | null,
): Promise<VideoInfo[] | null> {
  const searchKeyword = searchValueRef?.current?.value.trim() ?? null

  if (searchKeyword !== null && searchKeyword !== '') {
    event.preventDefault()

    const searchResult = await gapi.client.youtube.search.list({
      part: 'snippet',
      channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
      maxResults: 20,
      type: 'video',
      videoEmbeddable: 'true',
      q: `${searchKeyword} KY Karaoke -노래방챌린지`,
    })
    const listLength = searchResult.result.pageInfo.resultsPerPage

    const list: Array<
      | {
          id: string
          title: string
          artist: string
          number: string
          date: string
        }
      | number
    > = [...Array(listLength)].map((v, i) => {
      const video = searchResult.result.items[i]
      const videoID: string = video.id.videoId
      const videoDate: string = video.snippet.publishedAt
      const videoTitle: string = video.snippet.title
      // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

      console.log(videoTitle)

      let divided

      if (videoTitle.includes('(KY.')) {
        divided = videoTitle.split('(KY.')
      } else if (videoTitle.includes('[KY')) {
        divided = videoTitle.split('[KY')
      } else {
        divided = videoTitle.split(')')
      }
      const titleArtist = divided[0].trim().split('-')
      const title = titleArtist[0].trim()
      const artist = titleArtist.slice(1).join('')
      let number = divided[1].trim().split(')')[0]
      if (typeof parseInt(number, 10) !== 'number') {
        number = '0'
      }

      const item = {
        id: videoID,
        title,
        artist,
        number,
        date: videoDate,
      }

      return item
    })

    const listLegnthAll: number = searchResult.result.pageInfo.totalResults
    list.push(listLegnthAll)
    return list
  }
  return null
}
