import { useContext } from 'react'
import { AppActionContext, AppRefContext } from '../utils/AppProvider'
import { SearchActionContext } from '../utils/SearchProvider'
import searchVideos from '../function/searchVideos'

export default function SearchArea(): JSX.Element {
  const { setVideoID } = useContext(AppActionContext)
  const { searchValueRef } = useContext(AppRefContext)
  const { setVideoInfos, setVideoAllLength } = useContext(SearchActionContext)

  return (
    <search
      id='search-area'
      className='absolute left-0 top-0 z-30 w-full overflow-hidden p-4 sm:flex'>
      <form
        id='search-form'
        name='search'
        action='#'
        className='flex flex-grow'>
        <fieldset
          id='search-form__inputbox'
          className='relative flex flex-grow items-center'>
          <input
            ref={searchValueRef}
            id='search-form__value'
            name='search-form__value'
            type='text'
            minLength={1}
            pattern='\S*'
            placeholder='ex) 윤하 먹구름'
            className='box-border h-10 flex-grow rounded-2xl bg-light bg-opacity-15 p-2 text-center placeholder:text-light placeholder:text-opacity-50 focus:bg-opacity-25 focus:outline-none sm:p-4'
            required
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
                void searchVideos(event, {
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
