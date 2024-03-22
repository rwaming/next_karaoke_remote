import { gapi } from 'gapi-script'
import { type MutableRefObject, type MouseEvent } from 'react'

export default async function searchVideo(
  event: MouseEvent,
  searchRef: MutableRefObject<HTMLDivElement | null> | null,
): Promise<void> {
  const searchInput =
    searchRef?.current?.querySelector('#search-form__value') ?? null
  const searchKeyword = searchInput?.nodeValue
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
  }
}
