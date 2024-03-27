import { createContext } from 'react'
import { type YouTubeEvent } from 'react-youtube'

const AppContext = createContext<{
  videoEvent: YouTubeEvent | null
  videoID: string
  videoTitle: string
  videoArtist: string
  videoNumber: string
  videoDate: string
}>({
  videoEvent: null,
  videoID: '',
  videoTitle: '',
  videoArtist: '',
  videoNumber: '',
  videoDate: '',
})

export default AppContext
