import { useContext } from 'react'
import { AppRefContext } from '../utils/AppProvider'
import searchVideos from '../function/searchVideos'
import { SearchActionContext } from '../utils/SearchProvider'

export default function SearchArea(): JSX.Element {
  const { searchValueRef } = useContext(AppRefContext)
  const { setVideoInfos, setVideoAllLength } = useContext(SearchActionContext)

  return (
    <search id='search-area' className='flex w-full'>
      <h4 className='invisible absolute'>노래 검색 키워드 입력란</h4>
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
            type='search'
            minLength={1}
            pattern='\S*'
            placeholder='ex) 윤하 먹구름'
            className='box-border h-12 flex-grow bg-light bg-opacity-15 p-2 text-center placeholder:text-light placeholder:text-opacity-75 focus:border-2 focus:outline-none sm:p-4'
            required
          />
          <fieldset
            id='search-form__buttonbox'
            className='absolute right-0 flex items-center'>
            <input
              id='search-form__clear'
              type='reset'
              value='✕'
              className='hidden pr-2 text-dark text-opacity-30 sm:flex sm:p-2'
            />
            <input
              id='search-form__search'
              type='submit'
              value='🔍'
              className='x-cover-instead bg-light-input mr-2 hidden text-2xl sm:flex'
              onClick={(event) => {
                void searchVideos(event, {
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
