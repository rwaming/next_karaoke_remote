import { useContext } from 'react'
import AppContext from '@/utils/AppContext'
import searchVideos from '@/search/searchVideos'
import SearchContext from '@/utils/SearchContext'

export default function SearchArea(): JSX.Element {
  const { searchValueRef } = useContext(AppContext)
  const { setVideoInfos, setAllVideoLength } = useContext(SearchContext)

  return (
    <search id="search-area" className="flex w-full">
      <form
        id="search-form"
        name="search"
        action="#"
        className="flex flex-grow"
      >
        <fieldset
          id="search-form__inputbox"
          className="relative flex flex-grow items-center"
        >
          <input
            ref={searchValueRef}
            id="search-form__value"
            name="search-form__value"
            type="search"
            minLength={1}
            pattern="/S*"
            placeholder="ex) 윤하 먹구름"
            className="box-border h-12 flex-grow border bg-light-input p-2 text-center focus:border-2 focus:border-lime-200 focus:bg-light-input focus:outline-none"
            required
          />
          <fieldset
            id="search-form__buttonbox"
            className="absolute right-0 flex items-center"
          >
            <input
              id="search-form__clear"
              type="reset"
              value="✕"
              className="pr-2 text-dark text-opacity-30"
            />
            <input
              id="search-form__search"
              type="submit"
              value="🔍"
              className="x-cover-instead mr-2 bg-light-input text-2xl"
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
    </search>
  )
}
