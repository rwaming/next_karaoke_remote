import { gapi } from 'gapi-script'
import { type MutableRefObject, type MouseEvent } from 'react'

export default async function searchVideo(
  event: MouseEvent,
  searchValueRef: MutableRefObject<HTMLInputElement | null> | null,
): Promise<Array<
  | {
      id: string
      title: string
      artist: string
      number: string
      date: string
    }
  | number
> | null> {
  const searchKeyword = searchValueRef?.current?.value ?? null

  if (searchKeyword != null) {
    event.preventDefault()

    const searchResult = await gapi.client.youtube.search.list({
      part: 'snippet',
      channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
      maxResults: 10,
      type: 'video',
      videoEmbeddable: 'true',
      q: searchKeyword,
    })
    console.log(searchResult)
    const listLegnth = searchResult.result.pageInfo.resultsPerPage

    const list: Array<
      | {
          id: string
          title: string
          artist: string
          number: string
          date: string
        }
      | number
    > = [...Array(listLegnth)].map((v, i) => {
      const video = searchResult.result.items[i]
      const videoID: string = video.id.videoId
      const videoDate: string = video.snippet.publishedAt
      const videoTitle: string = video.snippet.title
      // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

      const divided = videoTitle.split(' (KY.')
      const titleArtist = divided[0].split(' - ')
      const title = titleArtist[0]
      const artist = titleArtist.slice(1).join('')
      const number = divided[1].split(')')[0]

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
  return searchKeyword
}
