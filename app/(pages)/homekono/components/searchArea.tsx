import { useContext } from 'react'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import { SearchActionContext, SearchRefContext } from '@/utils/SearchProvider'
import videoSearch from '@/(pages)/homekono/functions/videoSearch'
import searchOpenClose from '@/(pages)/homekono/functions/searchOpenClose'

export default function SearchArea(): JSX.Element {
  const { setPlayerState } = useContext(HomekonoActionContext)
  const { playerRef, controllerRef, searchRef } = useContext(HomekonoRefContext)
  const { searchValueRef, searchModalRef } = useContext(SearchRefContext)
  const { setVideoInfos, setVideoAllLength } = useContext(SearchActionContext)

  return (
    <search className='search-song absolute flex min-h-2/3dvh w-full flex-col p-4 pt-3'>
      <form name='search-song' action='#' className='flex'>
        <fieldset className='search-song__field relative z-30 flex min-w-0 flex-grow items-start'>
          <input
            ref={searchValueRef}
            name='search-song__input'
            type='text'
            minLength={1}
            pattern='\S*'
            placeholder='ex) 윤하 먹구름'
            className='box-border h-8 min-w-0 flex-grow rounded-2xl bg-light bg-opacity-15 p-2 text-center placeholder:text-light placeholder:text-opacity-50 focus:bg-opacity-25 focus:outline-none sm:h-10 sm:p-4'
            required
            onFocus={() => {
              if (searchRef.current?.classList.contains('hidden') === true) {
                searchOpenClose(
                  playerRef,
                  controllerRef,
                  searchRef,
                  searchModalRef,
                )
              }
            }}
            onClick={() => {
              if (searchRef.current?.classList.contains('hidden') === true) {
                searchOpenClose(
                  playerRef,
                  controllerRef,
                  searchRef,
                  searchModalRef,
                )
              }
            }}
          />
          <fieldset className='search-song__button-box absolute right-0 flex items-center'>
            <input
              type='reset'
              value='✕'
              className='search-song__button-clear hidden pr-2 opacity-50 sm:flex sm:p-2'
            />
            <input
              type='submit'
              value='🔍'
              className='search-song__button-search bg-light-input mr-2 hidden text-2xl sm:flex'
              onClick={(event) => {
                const searchKeyword = searchValueRef.current?.value.trim() ?? ''
                if (searchKeyword !== '') {
                  event.preventDefault()
                  void videoSearch(
                    searchKeyword,
                    setPlayerState,
                    setVideoInfos,
                    setVideoAllLength,
                  )
                }
              }}
            />
          </fieldset>
        </fieldset>
      </form>
    </search>
  )
}
