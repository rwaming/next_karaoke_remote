import { type MutableRefObject, type MouseEvent } from 'react'

export default function searchVideo(
  event: MouseEvent,
  searchRef: MutableRefObject<HTMLDivElement | null> | null,
): void {
  const searchInput =
    searchRef?.current?.querySelector('#search-form__value') ?? null
  const searchKeyword = searchInput?.nodeValue
  if (searchKeyword != null) {
    event.preventDefault()
  }
}
