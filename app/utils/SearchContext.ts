import { createContext } from 'react'
import { type SetStateType, type VideoInfo } from './Types'

const SearchContext = createContext<{
  searchInfos: VideoInfo[] | null
  setSearchInfos: SetStateType<VideoInfo[] | null>
  videoAllLength: number | null
  setVideoAllLength: SetStateType<number | null>
}>({
  searchInfos: null,
  setSearchInfos: () => {},
  videoAllLength: null,
  setVideoAllLength: () => {},
})

export default SearchContext
