import { createContext } from 'react'
import { type SearchInfo, type SetState } from './Types'

const SearchContext = createContext<{
  searchInfos: SearchInfo | null
  setSearchInfos: SetState<SearchInfo | null>
  videoAllLength: number
  setVideoAllLength: SetState<number>
}>({
  searchInfos: null,
  setSearchInfos: () => {},
  videoAllLength: 0,
  setVideoAllLength: () => {},
})

export default SearchContext
