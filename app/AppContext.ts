import {
  type Dispatch,
  createContext,
  type SetStateAction,
  type MutableRefObject,
} from 'react'
import { type YouTubeEvent } from 'react-youtube'

const AppContext = createContext<{
  videoEvent: YouTubeEvent | null
  setVideoEvent: Dispatch<SetStateAction<YouTubeEvent | null>>
  videoID: string | null
  setVideoID: Dispatch<SetStateAction<string | null>>
  videoTitle: string
  setVideoTitle: Dispatch<SetStateAction<string>>
  videoDate: string
  setVideoDate: Dispatch<SetStateAction<string>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  playerRef: MutableRefObject<HTMLDivElement | null> | null
  controllerRef: MutableRefObject<HTMLDivElement | null> | null
  searchRef: MutableRefObject<HTMLDivElement | null> | null
  searchValueRef: MutableRefObject<HTMLInputElement | null> | null
  searchModalRef: MutableRefObject<HTMLDivElement | null> | null
}>({
  videoEvent: null,
  setVideoEvent: () => {},
  videoID: null,
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
