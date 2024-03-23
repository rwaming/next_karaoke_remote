import { type DivType, type RefType } from '@/utils/Types'
import searchBoxClose from './searchBoxClose'

export default function searchBoxOpen(
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
