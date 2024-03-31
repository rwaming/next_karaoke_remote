import { useContext } from 'react'
import SearchProvider, { SearchRefContext } from '../utils/SearchProvider'
import SearchArea from './searchArea'
import { AppRefContext } from '../utils/AppProvider'
import searchOpenClose from '../function/searchOpenClose'
import SearchList from './searchList'

function SearchModal(): JSX.Element {
  const { playerRef, controllerRef, searchRef } = useContext(AppRefContext)
  const { searchModalRef } = useContext(SearchRefContext)
  return (
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
  )
}

export default function Search(): JSX.Element {
  return (
    <SearchProvider>
      <section
        id='search'
        className='absolute left-0 top-0 flex h-dvh w-dvw items-end sm:items-start'>
        <h3 className='hidden'>노래 검색창</h3>
        <SearchArea />
        <SearchList />
        <SearchModal />
      </section>
    </SearchProvider>
  )
}
