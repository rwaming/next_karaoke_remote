import { type Ref, type Div } from '@/utils/Types'

export default function searchBoxClose(
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
