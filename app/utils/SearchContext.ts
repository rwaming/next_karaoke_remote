import { createContext } from 'react'
import { type VideoInfos, type SetState } from './Types'

const SearchContext = createContext<{
  videoInfos: VideoInfos
  setVideoInfos: SetState<VideoInfos>
  allVideoLength: number
  setAllVideoLength: SetState<number>
  listNote: string
}>({
  videoInfos: [],
  setVideoInfos: () => {},
  allVideoLength: -1,
  setAllVideoLength: () => {},
  listNote: '',
})

export default SearchContext
