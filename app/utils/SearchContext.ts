import { createContext } from 'react'
import { type VideoInfos, type SetState } from './Types'

const SearchContext = createContext<{
  videoInfos: VideoInfos | null
  setVideoInfos: SetState<VideoInfos | null>
  allVideoLength: number
  setAllVideoLength: SetState<number>
}>({
  videoInfos: null,
  setVideoInfos: () => {},
  allVideoLength: -1,
  setAllVideoLength: () => {},
})

export default SearchContext
