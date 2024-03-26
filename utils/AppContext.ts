import { createContext } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import {
  type UseRef,
  type Div,
  type Input,
  type SetState as SetStateT,
  type Button,
} from './Types'

const AppContext = createContext<{
  videoEvent: YouTubeEvent | null
  setVideoEvent: SetStateT<YouTubeEvent | null>
  videoID: string
  setVideoID: SetStateT<string>
  videoTitle: string
  setVideoTitle: SetStateT<string>
  videoArtist: string
  setVideoArtist: SetStateT<string>
  videoNumber: string
  setVideoNumber: SetStateT<string>
  videoDate: string
  setVideoDate: SetStateT<string>
  playerRef: UseRef<Div>
  controllerRef: UseRef<Div>
  searchRef: UseRef<Div>
  searchValueRef: UseRef<Input>
  searchModalRef: UseRef<Button>
}>({
  videoEvent: null,
  setVideoEvent: () => {},
  videoID: '',
  setVideoID: () => {},
  videoTitle: '',
  setVideoTitle: () => {},
  videoArtist: '',
  setVideoArtist: () => {},
  videoNumber: '',
  setVideoNumber: () => {},
  videoDate: '',
  setVideoDate: () => {},
  playerRef: { current: null },
  controllerRef: { current: null },
  searchRef: { current: null },
  searchValueRef: { current: null },
  searchModalRef: { current: null },
})

export default AppContext