import { type MouseEvent, useContext } from 'react'
import AppContext from '@/utils/AppContext'
import { type SetState, type VideoInfo } from '@/utils/Types'
import searchVideo from '../controller/searchVideo'

export default function SearchArea({
  states: { searchInfos, setSearchInfos, setVideoAllLength },
}: {
  states: {
    searchInfos: VideoInfo[] | null
    setSearchInfos: SetState<VideoInfo[] | null>
    setVideoAllLength: SetState<number | null>
  }
}): JSX.Element {
  const { searchValueRef } = useContext(AppContext)
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
  return (
    <div id="search-area" className="w-full flex">
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
          <fieldset id="search-form__buttonbox" className="x-cover-buttonbox">
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
              onClick={(event) => {
                void getSearchList(event)
              }}
            />
          </fieldset>
        </fieldset>
      </form>
    </div>
  )
}
