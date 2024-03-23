import searchBoxClose from '@/controller/searchBoxClose'
import AppContext from '@/utils/AppContext'
import { type VideoInfo } from '@/utils/Types'
import { type MouseEvent, useCallback, useContext } from 'react'

export default function SearchList({
  searchInfos,
}: {
  searchInfos: VideoInfo[]
}): JSX.Element[] {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppContext)

  const changeVideo = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
    },
    [controllerRef, playerRef, searchModalRef, searchRef],
  )

  return searchInfos.map((v) => {
    if (typeof v === 'object') {
      return (
        <li key={`${v.title}`} className="search-list__li">
          <button
            type="button"
            className="search-list__li-click"
            onClick={(event) => {
              changeVideo(event)
            }}
          >
            <p className="search-list__li-title">{v.title}</p>
            <p className="search-list__li-artist">{v.artist}</p>
            <p className=" search-list__li-number">{v.number}</p>
          </button>
        </li>
      )
    }
    return (
      <li key="error" className="search-list__li flex h-8">
        It is expected null
      </li>
    )
  })
}
