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
        ref={searchRef}
        id='search'
        className='fixed left-0 top-0 z-20 hidden h-screen w-screen'>
        <h3 className='invisible absolute'>노래 검색창</h3>

        <section
          id='search-box'
          className='search-box relative z-10 flex w-full flex-col text-light backdrop-blur'>
          <SearchArea />
          <SearchList />
          <button
            id='search-close'
            type='button'
            className='absolute bottom-0 right-0 hidden p-4 sm:block'
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
          className='absolute left-0 top-0 hidden h-screen w-screen cursor-default bg-slate-900 bg-opacity-50 text-transparent'
          onClick={() => {
            searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}>
          Close
        </button>
      </div>
    </SearchProvider>
  )
}
