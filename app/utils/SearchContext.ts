import { createContext } from 'react'
import { type SearchContextType } from './Types'

const SearchContext = createContext<SearchContextType>({
  searchInfos: null,
  setSearchInfos: () => {},
  videoAllLength: null,
  setVideoAllLength: () => {},
})

export default SearchContext
