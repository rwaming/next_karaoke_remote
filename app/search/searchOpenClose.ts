import { type UseRef, type Div, type Button } from '@/utils/TypeCustum'

export default function searchOpenClose(
  playerRef: UseRef<Div>,
  controllerRef: UseRef<Div>,
  searchRef: UseRef<Div>,
  searchModalRef: UseRef<Button>,
): void {
  const player: Div | null = playerRef?.current ?? null
  const controller: Div | null = controllerRef?.current ?? null
  const search: Div | null = searchRef?.current ?? null
  const searchModal: Button | null = searchModalRef?.current ?? null

  if (
    search !== null &&
    player !== null &&
    controller !== null &&
    searchModal !== null
  ) {
    if (search.classList.contains('hidden')) {
      search.classList.remove('hidden')
      search.classList.add('flex')
      player.classList.add('player-search')
      player.classList.remove('md:justify-center')
      controller.classList.add('controller-search')
      searchModal.classList.remove('hidden')
      searchModal.classList.add('block')
    } else {
      search.classList.add('hidden')
      search.classList.remove('flex')
      player.classList.remove('player-search')
      player.classList.add('md:justify-center')
      controller.classList.remove('controller-search')
      searchModal.classList.add('hidden')
      searchModal.classList.remove('block')
    }
  }
}
