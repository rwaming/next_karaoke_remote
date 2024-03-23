import {
  type MouseEvent,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import AppContext from '../utils/AppContext'
import searchBoxClose from '../controller/searchBoxClose'
import searchVideo from '../controller/searchVideo'
import { type VideoInfo } from '../utils/types'

export default function Search(): JSX.Element {
  const {
    playerRef,
    controllerRef,
    searchRef,
    searchValueRef,
    searchModalRef,
  } = useContext(AppContext)

  const [searchInfos, setSearchInfos] = useState<VideoInfo[] | null>(null)
  const [videoAllLength, setVideoAllLength] = useState<number | null>(null)

  const getSearchList = async (event: MouseEvent): Promise<void> => {
    if (searchInfos !== null) {
      setSearchInfos(null)
    }
    const getList = await searchVideo(event, searchValueRef)
    if (getList !== null && getList.length > 1) {
      const getAllLegnth = getList.pop()
      setSearchInfos(getList)
      if (typeof getAllLegnth === 'number') {
        setVideoAllLength(getAllLegnth)
      }
    } else if (getList === null) {
      setVideoAllLength(null)
    } else {
      setVideoAllLength(0)
    }
  }

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
        <div id="search-header" className="w-full flex">
          <form
            id="search-form"
            name="search"
            action="#"
            className="flex flex-grow"
          >
            <fieldset
              id="search-form__inputbox"
              className="flex flex-grow x-cover-box"
            >
              <input
                ref={searchValueRef}
                id="search-form__value"
                name="search-form__value"
                type="search"
                minLength={1}
                pattern="/S*"
                placeholder="ex) 윤하 먹구름"
                className="x-cover-target bg-light-input border p-2 text-center"
                required
              />
              <fieldset
                id="search-form__buttonbox"
                className="x-cover-buttonbox"
              >
                <input
                  id="search-form__clear"
                  type="reset"
                  value="✕"
                  className="text-dark text-opacity-30 pr-2"
                />
                <span className="bg-light-input x-cover-sticker mr-2 md:mr-4" />
                <input
                  id="search-form__search"
                  type="submit"
                  value="🔍"
                  className="x-cover-instead mr-2 text-2xl"
                  onClick={(event: MouseEvent) => {
                    void getSearchList(event)
                  }}
                />
              </fieldset>
            </fieldset>
          </form>
        </div>
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
