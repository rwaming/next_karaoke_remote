import { createContext } from 'react'
import { type VideoInfos, type SetState } from './TypeCustum'

const SearchContext = createContext<{
  videoInfos: VideoInfos
  setVideoInfos: SetState<VideoInfos>
  allVideoLength: number
  setAllVideoLength: SetState<number>
}>({
  videoInfos: [],
  setVideoInfos: () => {},
  allVideoLength: -1,
  setAllVideoLength: () => {},
})

export default SearchContext
