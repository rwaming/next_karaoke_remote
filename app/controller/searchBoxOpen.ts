import { type MutableRefObject } from 'react'
import searchBoxClose from './searchBoxClose'

export default function searchBoxOpen(
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
    search.classList.remove('hidden')
    search.classList.add('flex')
    player.classList.add('player-search')
    controller.classList.add('controller-search')
    searchModal.classList.remove('hidden')
    searchModal.classList.add('block')
    searchModal.addEventListener('click', () => {
      searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
    })
  }
}
