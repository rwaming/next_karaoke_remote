import { type Dispatch, createContext, type SetStateAction } from 'react'
import { type YouTubeEvent } from 'react-youtube'

const HomeContext = createContext<{
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
})

export default HomeContext
