import { type MutableRefObject } from 'react'

export default function searchBoxClose(
  playerRef: MutableRefObject<HTMLDivElement | null> | null,
  controllerRef: MutableRefObject<HTMLDivElement | null> | null,
  searchRef: MutableRefObject<HTMLDivElement | null> | null,
  searchModalRef: MutableRefObject<HTMLDivElement | null> | null,
): void {
  const player: HTMLDivElement | null = playerRef?.current ?? null
  const controller: HTMLDivElement | null = controllerRef?.current ?? null
  const search: HTMLDivElement | null = searchRef?.current ?? null
  const searchModal: HTMLDivElement | null = searchModalRef?.current ?? null

  if (
    search !== null &&
    player !== null &&
    controller !== null &&
    searchModal !== null
  ) {
    search.classList.add('hidden')
    search.classList.remove('flex')
    player.classList.remove('player-search')
    player.classList.add('md:justify-center')
    controller.classList.remove('controller-search')
    searchModal.classList.add('hidden')
    searchModal.classList.remove('block')
    searchModal.removeEventListener('click', () => {
      searchBoxClose(null, null, null, null)
    })
  }
}
