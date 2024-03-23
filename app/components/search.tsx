import {
  type MouseEvent,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import AppContext from '../utils/AppContext'
import searchBoxClose from '../controller/searchBoxClose'
import { type VideoInfo } from '../utils/Types'
import SearchArea from './searchArea'

export default function Search(): JSX.Element {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppContext)

  const [searchInfos, setSearchInfos] = useState<VideoInfo[] | null>(null)
  const [videoAllLength, setVideoAllLength] = useState<number | null>(null)

  const changeVideo = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
    },
    [controllerRef, playerRef, searchModalRef, searchRef],
  )

  // id, title, artist, number, date
  const searchList = useMemo(() => {
    if (searchInfos !== null) {
      return searchInfos.map((v, i) => {
        if (typeof v === 'object') {
          return (
            <li
              key={`${v.title}`}
              className="search-list__li flex h-4 m-4 border-b border-b-gray-800 border-opacity-50 py-2 box-content"
            >
              <p className="search-list__li-text flex-grow flex max-w-full">
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  className="flex-grow flex items-center max-w-full"
                  onClick={(event) => {
                    changeVideo(event)
                  }}
                >
                  <span className="block search-list__li-title flex-grow text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                    {v.title}
                  </span>
                  <span className="block search-list__li-artist basis-1/5vw flex-shrink-0 text-xs text-ellipsis overflow-hidden whitespace-nowrap opacity-70">
                    {v.artist}
                  </span>
                  <span className="hidden search-list__li-artist basis-1/10vw flex-shrink-0 text-xs text-ellipsis overflow-hidden whitespace-nowrap opacity-70 md:block">
                    {v.number}
                  </span>
                </a>
              </p>
            </li>
          )
        }
        return (
          <li key="error" className="search-list__li flex h-8">
            no info or no object
          </li>
        )
      })
    }
    return null
  }, [changeVideo, searchInfos])

  return (
    <>
      <div
        ref={searchRef}
        id="search"
        className="hidden w-screen flex-col fixed z-20 bg-light text-dark"
      >
        <SearchArea
          states={{
            searchInfos,
            setSearchInfos,
            setVideoAllLength,
          }}
        />
        <div
          id="search-list"
          className="flex-grow relative overflow-x-scroll md:px-20"
        >
          <p id="search-list__note" className="text-center text-xs p-2">
            {videoAllLength === null && '검색어를 입력해주세요.'}
            {videoAllLength === 0 && '검색된 결과가 없습니다.'}
            {videoAllLength !== null &&
              videoAllLength > 0 &&
              `${videoAllLength}건이 검색되었습니다.`}{' '}
          </p>
          {videoAllLength !== null && videoAllLength > 0 && (
            <p className="search-list__note-label flex-grow flex max-w-full h-4 m-4 p-2 font-bold box-content pl-3">
              <span className="block search-list__li-title flex-grow text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                제목
              </span>
              <span className="block search-list__li-artist basis-1/5vw md:basis-1/5vw flex-shrink-0 text-sm pl-4">
                가수
              </span>
              <span className="hidden search-list__li-artist basis-1/10vw flex-shrink-0 text-sm md:block">
                금영 번호
              </span>
            </p>
          )}
          <ol id="search-list__ol">{searchList}</ol>
        </div>
        <button
          id="search-close"
          type="button"
          className="hidden text-dark absolute right-0 bottom-0 p-4 md:block"
          onClick={() => {
            searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}
        >
          ✕
        </button>
      </div>
      <div
        ref={searchModalRef}
        id="search-modal"
        className="hidden bg-gray-800 bg-opacity-50 w-screen h-screen absolute top-0 left-0"
      />
    </>
  )
}
