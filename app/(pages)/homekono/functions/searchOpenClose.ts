import { type UseRef, type Div, type Button } from '../../../utils/Types'

export default function searchOpenClose(
  playerRef: UseRef<Div>,
  controllerRef: UseRef<Div>,
  searchRef: UseRef<Div>,
  searchModalRef: UseRef<Button>,
): void {
  const player: Div | null = playerRef.current
  const controller: Div | null = controllerRef.current
  const search: Div | null = searchRef.current
  const searchModal: Button | null = searchModalRef.current

  if (
    search !== null &&
    player !== null &&
    controller !== null &&
    searchModal !== null
  ) {
    if (search.classList.contains('hidden')) {
      search.classList.remove('hidden')
      search.classList.add('flex')
      player.classList.remove('player__search-closed')
      player.classList.add('player__search-opened')
      searchModal.classList.remove('search-modal__search-closed')
      searchModal.classList.add('search-modal__search-opened')
      controller.classList.remove('controller__search-closed')
      controller.classList.add('controller__search-opened')
    } else {
      search.classList.add('hidden')
      search.classList.remove('flex')
      player.classList.add('player__search-closed')
      player.classList.remove('player__search-opened')
      searchModal.classList.add('search-modal__search-closed')
      searchModal.classList.remove('search-modal__search-opened')
      controller.classList.add('controller__search-closed')
      controller.classList.remove('controller__search-opened')
    }
  }
}
