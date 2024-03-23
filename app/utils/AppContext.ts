import { createContext } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import {
  type RefType,
  type DivType,
  type InputType,
  type SetStateType,
} from './Types'

const AppContext = createContext<{
  videoEvent: YouTubeEvent | null
  setVideoEvent: SetStateType<YouTubeEvent | null>
  videoID: string
  setVideoID: SetStateType<string>
  videoTitle: string
  setVideoTitle: SetStateType<string>
  videoDate: string
  setVideoDate: SetStateType<string>
  isPlaying: boolean
  setIsPlaying: SetStateType<boolean>
  playerRef: RefType<DivType>
  controllerRef: RefType<DivType>
  searchRef: RefType<DivType>
  searchValueRef: RefType<InputType>
  searchModalRef: RefType<DivType>
}>({
  videoEvent: null,
  setVideoEvent: () => {},
  videoID: '',
  setVideoID: () => {},
  videoTitle: '',
  setVideoTitle: () => {},
  videoDate: '',
  setVideoDate: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  playerRef: null,
  controllerRef: null,
  searchRef: null,
  searchValueRef: null,
  searchModalRef: null,
})

export default AppContext
