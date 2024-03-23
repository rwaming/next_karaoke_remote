import searchBoxClose from '@/controller/searchBoxClose'
import AppContext from '@/utils/AppContext'
import SearchContext from '@/utils/SearchContext'
import { type MouseEvent, useCallback, useContext } from 'react'

export default function SearchList(): JSX.Element {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppContext)
  const { searchInfos } = useContext(SearchContext)

  const changeVideo = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
    },
    [controllerRef, playerRef, searchModalRef, searchRef],
  )
  return (
    <ul id="search-list__ul">
      <li id="search-list__label" className="search-list__li">
        <h6 className="search-list__li-title">제목</h6>
        <h6 className="search-list__li-artist">가수</h6>
        <h6 className="search-list__li-number">금영 번호</h6>
      </li>

      {searchInfos?.map((v) => {
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
        return null
      })}
    </ul>
  )
}
