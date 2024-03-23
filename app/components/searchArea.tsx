import { useContext } from 'react'
import AppContext from '@/utils/AppContext'
import searchVideos from '@/controller/searchVideos'
import SearchContext from '@/utils/SearchContext'

export default function SearchArea(): JSX.Element {
  const { searchValueRef } = useContext(AppContext)
  const { setVideoInfos, setAllVideoLength } = useContext(SearchContext)

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
          className="flex flex-grow relative items-center"
        >
          <input
            ref={searchValueRef}
            id="search-form__value"
            name="search-form__value"
            type="search"
            minLength={1}
            pattern="/S*"
            placeholder="ex) 윤하 먹구름"
            className="flex-grow bg-light-input box-border border h-12 p-2 text-center focus:bg-light-input focus:outline-none focus:border-2 focus:border-lime-200"
            required
          />
          <fieldset
            id="search-form__buttonbox"
            className="flex items-center absolute right-0"
          >
            <input
              id="search-form__clear"
              type="reset"
              value="✕"
              className="text-dark text-opacity-30 pr-2"
            />
            <input
              id="search-form__search"
              type="submit"
              value="🔍"
              className="x-cover-instead mr-2 text-2xl bg-light-input"
              onClick={(event) => {
                void searchVideos(event, {
                  setVideoInfos,
                  searchValueRef,
                  setAllVideoLength,
                })
              }}
            />
          </fieldset>
        </fieldset>
      </form>
    </div>
  )
}
