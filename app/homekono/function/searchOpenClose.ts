import { type UseRef, type Div, type Button } from '../../utils/Types'

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

  console.log(player)
  console.log(controller)
  console.log(search)
  console.log(searchModal)
  if (
    search !== null &&
    player !== null &&
    controller !== null &&
    searchModal !== null
  ) {
    console.log('open close')
    if (search.classList.contains('hidden')) {
      search.classList.remove('hidden')
      search.classList.add('flex')
      player.classList.remove('player__search-close')
      player.classList.add('player__search-open')
      searchModal.classList.remove('search-modal__search-close')
      searchModal.classList.add('search-modal__search-open')
      controller.classList.remove('controller__search-close')
      controller.classList.add('controller__search-open')
    } else {
      search.classList.add('hidden')
      search.classList.remove('flex')
      player.classList.add('player__search-close')
      player.classList.remove('player__search-open')
      searchModal.classList.add('search-modal__search-close')
      searchModal.classList.remove('search-modal__search-open')
      controller.classList.add('controller__search-close')
      controller.classList.remove('controller__search-open')
    }
  }
}
