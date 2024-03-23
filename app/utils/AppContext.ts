import { createContext } from 'react'
import { type AppContextType } from './Types'

const AppContext = createContext<AppContextType>({
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
