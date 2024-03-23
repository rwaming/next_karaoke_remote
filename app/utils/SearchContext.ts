import { createContext } from 'react'
import { type SetStateType, type VideoInfoType } from './Types'

const SearchContext = createContext<{
  searchInfos: VideoInfoType[] | null
  setSearchInfos: SetStateType<VideoInfoType[] | null>
  videoAllLength: number | null
  setVideoAllLength: SetStateType<number | null>
}>({
  searchInfos: null,
  setSearchInfos: () => {},
  videoAllLength: null,
  setVideoAllLength: () => {},
})

export default SearchContext
