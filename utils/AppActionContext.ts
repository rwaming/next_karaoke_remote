import { createContext } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import { type SetState } from './Types'

const actionContext = createContext<{
  setVideoEvent: SetState<YouTubeEvent | null>
  setVideoID: SetState<string>
  setVideoTitle: SetState<string>
  setVideoArtist: SetState<string>
  setVideoNumber: SetState<string>
  setVideoDate: SetState<string>
}>({
  setVideoEvent: () => {},
  setVideoID: () => {},
  setVideoTitle: () => {},
  setVideoArtist: () => {},
  setVideoNumber: () => {},
  setVideoDate: () => {},
})

export default actionContext
