import { type RefType, type DivType, type ButtonType } from '@/utils/Types'

export default function searchOpenClose(
  playerRef: RefType<DivType>,
  controllerRef: RefType<DivType>,
  searchRef: RefType<DivType>,
  searchModalRef: RefType<ButtonType>,
): void {
  const player: DivType | null = playerRef?.current ?? null
  const controller: DivType | null = controllerRef?.current ?? null
  const search: DivType | null = searchRef?.current ?? null
  const searchModal: ButtonType | null = searchModalRef?.current ?? null

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
