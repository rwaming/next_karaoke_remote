import { type MouseEvent, useContext, useState, useMemo } from 'react'
import AppContext from './AppContext'
import searchBoxClose from './controller/searchBoxClose'
import searchVideo from './controller/searchVideo'

export default function Search(): JSX.Element {
  const {
    playerRef,
    controllerRef,
    searchRef,
    searchValueRef,
    searchModalRef,
  } = useContext(AppContext)

  const [searchInfos, setSearchInfo] = useState<Array<
    | {
        id: string
        title: string
        artist: string
        number: string
        date: string
      }
    | number
  > | null>(null)
  const [videoAllLength, setVideoAllLength] = useState<number | null>(null)

  const getSearchList = async (event: MouseEvent): Promise<void> => {
    searchInfos !== null && setSearchInfo(null)
    const getList = await searchVideo(event, searchValueRef)
    if (getList !== null) {
      setSearchInfo(getList)
      const getAllLegnth = getList[-1]
      if (typeof getAllLegnth === 'number') {
        setVideoAllLength(getAllLegnth)
      }
    }
  }

  const searchList = useMemo(() => {
    if (searchInfos !== null) {
      const videoInfos = searchInfos.slice(0, searchInfos.length - 2)
      return videoInfos.map((v, i) => {
        if (typeof v === 'object') {
          return (
            <div key={`${v.title}`} id={`search-list-${i}`}>
              {v.id}
              {v.title}
              {v.artist}
              {v.number}
              {v.date}
            </div>
          )
        }
        return <p key="error">no info or no object</p>
      })
    }
    return <p>searchInfo is null</p>
  }, [searchInfos])

  return (
    <>
      <div
        ref={searchRef}
        id="search"
        className="hidden w-screen flex-col fixed z-10 bg-light text-dark"
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
        <div id="search-list" className="flex-grow relative">
          {videoAllLength}
          {searchList}
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
