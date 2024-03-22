import { gapi } from 'gapi-script'
import { type MutableRefObject, type MouseEvent } from 'react'

export default async function searchVideo(
  event: MouseEvent,
  searchRef: MutableRefObject<HTMLDivElement | null> | null,
  searchValueRef: MutableRefObject<HTMLInputElement | null> | null,
): Promise<void> {
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
    // const listLegnthAll = searchResult.result.items.pageInfo.totalResults
    const listLegnth = searchResult.result.items.pageInfo.resultsPerPage

    const list = [...Array(listLegnth)].map((v, i) => {
      const video = searchResult.result.items[i]
      const videoID: string = video.id.videoId
      const videoDate: string = video.snippet.publishedAt
      const videoTitle: string = video.snippet.title
      // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

      const divided = videoTitle.split(' (KY.')
      const titleArtist = divided[0].split(' - ')
      const title = titleArtist[0]
      const artist = titleArtist.slice(1, -1).join('')
      const number = divided[1].search(/\b\d{5}\b || \b\d{4}\b /)

      const item = {
        id: videoID,
        title,
        artist,
        number,
        date: videoDate,
      }

      return item
    })

    console.log(list)
  }
}
