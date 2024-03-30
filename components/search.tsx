import { useContext } from 'react'
import SearchProvider from '../utils/SearchProvider'
import SearchArea from './searchArea'
import { AppRefContext } from '../utils/AppProvider'
import searchOpenClose from '../function/searchOpenClose'
import SearchList from './searchList'

export default function Search(): JSX.Element {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppRefContext)

  return (
    <SearchProvider>
      <div
        id='search'
        className='absolute left-0 top-0 flex h-dvh w-dvw items-end sm:items-start'>
        <h3 className='hidden'>노래 검색창</h3>

        <SearchArea />
        <section
          ref={searchRef}
          id='search-box'
          className='search-box z-20 hidden w-full grow flex-col overflow-hidden rounded-t-lg bg-deep sm:top-0 sm:h-1/2dvh sm:min-h-0 sm:rounded-none sm:rounded-b-lg sm:drop-shadow-lg'>
          <SearchList />
          <button
            id='search-close'
            type='button'
            className='absolute bottom-0 right-0 hidden p-4 opacity-75 sm:block'
            onClick={() => {
              searchOpenClose(
                playerRef,
                controllerRef,
                searchRef,
                searchModalRef,
              )
            }}>
            ✕
          </button>
        </section>

        <button
          ref={searchModalRef}
          type='button'
          id='search-modal'
          className='absolute left-0 top-0 z-10 hidden h-screen w-screen cursor-default bg-slate-900 bg-opacity-50 text-transparent'
          onClick={() => {
            searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}>
          Close
        </button>
      </div>
    </SearchProvider>
  )
}
