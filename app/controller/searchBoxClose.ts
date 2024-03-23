import { type RefType, type DivType } from '@/utils/Types'

export default function searchBoxClose(
  playerRef: RefType<DivType>,
  controllerRef: RefType<DivType>,
  searchRef: RefType<DivType>,
  searchModalRef: RefType<DivType>,
): void {
  const player: DivType | null = playerRef?.current ?? null
  const controller: DivType | null = controllerRef?.current ?? null
  const search: DivType | null = searchRef?.current ?? null
  const searchModal: DivType | null = searchModalRef?.current ?? null

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
