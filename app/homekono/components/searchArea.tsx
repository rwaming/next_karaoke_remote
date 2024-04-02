import { useContext } from 'react'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import { SearchActionContext, SearchRefContext } from '@/utils/SearchProvider'
import videoSearch from '@/homekono/functions/videoSearch'
import searchOpenClose from '@/homekono/functions/searchOpenClose'

export default function SearchArea(): JSX.Element {
  const { setVideoID } = useContext(HomekonoActionContext)
  const { playerRef, controllerRef, searchRef } = useContext(HomekonoRefContext)
  const { searchValueRef, searchModalRef } = useContext(SearchRefContext)
  const { setVideoInfos, setVideoAllLength } = useContext(SearchActionContext)

  return (
    <search
      id='search-area'
      className='search-area absolute flex min-h-2/3dvh w-full flex-col p-4 pt-3'>
      <form id='search-form' name='search' action='#' className='flex'>
        <fieldset
          id='search-form__inputbox'
          className='relative z-30 flex min-w-0 flex-grow items-start'>
          <input
            ref={searchValueRef}
            id='search-form__value'
            name='search-form__value'
            type='text'
            minLength={1}
            pattern='\S*'
            placeholder='ex) 윤하 먹구름'
            className='box-border h-8 min-w-0 flex-grow rounded-2xl bg-light bg-opacity-15 p-2 text-center placeholder:text-light placeholder:text-opacity-50 focus:bg-opacity-25 focus:outline-none sm:h-10 sm:p-4'
            required
            onFocus={(evnet) => {
              if (searchRef.current?.classList.contains('hidden') === true) {
                searchOpenClose(
                  playerRef,
                  controllerRef,
                  searchRef,
                  searchModalRef,
                )
              }
            }}
            onClick={(event) => {
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
          <fieldset
            id='search-form__buttonbox'
            className='absolute right-0 flex items-center'>
            <input
              id='search-form__clear'
              type='reset'
              value='✕'
              className='hidden pr-2 opacity-50 sm:flex sm:p-2'
            />
            <input
              id='search-form__search'
              type='submit'
              value='🔍'
              className='x-cover-instead bg-light-input mr-2 hidden text-2xl sm:flex'
              onClick={(event) => {
                void videoSearch(event, {
                  setVideoID,
                  setVideoInfos,
                  searchValueRef,
                  setVideoAllLength,
                })
              }}
            />
          </fieldset>
        </fieldset>
      </form>
    </search>
  )
}
