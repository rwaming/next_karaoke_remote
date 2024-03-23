import { type Div, type Ref } from '@/utils/Types'
import searchBoxClose from './searchBoxClose'

export default function searchBoxOpen(
  playerRef: Ref<Div>,
  controllerRef: Ref<Div>,
  searchRef: Ref<Div>,
  searchModalRef: Ref<Div>,
): void {
  const player: Div | null = playerRef?.current ?? null
  const controller: Div | null = controllerRef?.current ?? null
  const search: Div | null = searchRef?.current ?? null
  const searchModal: Div | null = searchModalRef?.current ?? null

  if (
    search !== null &&
    player !== null &&
    controller !== null &&
    searchModal !== null
  ) {
    search.classList.remove('hidden')
    search.classList.add('flex')
    player.classList.add('player-search')
    player.classList.remove('md:justify-center')
    controller.classList.add('controller-search')
    searchModal.classList.remove('hidden')
    searchModal.classList.add('block')
    searchModal.addEventListener('click', () => {
      searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
    })
  }
}
