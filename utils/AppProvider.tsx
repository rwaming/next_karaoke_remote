import { createContext, useState, useRef, useMemo } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import {
  type Button,
  type Div,
  type Input,
  type SetState,
  type UseRef,
} from './Types'

const AppValueContext = createContext<{
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

const AppActionContext = createContext<{
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

const AppRefContext = createContext<{
  playerRef: UseRef<Div>
  controllerRef: UseRef<Div>
  searchRef: UseRef<Div>
  searchValueRef: UseRef<Input>
  searchModalRef: UseRef<Button>
}>({
  playerRef: { current: null },
  controllerRef: { current: null },
  searchRef: { current: null },
  searchValueRef: { current: null },
  searchModalRef: { current: null },
})

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [videoEvent, setVideoEvent] = useState<YouTubeEvent | null>(null)
  const [videoID, setVideoID] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoArtist, setVideoArtist] = useState('')
  const [videoNumber, setVideoNumber] = useState('')
  const [videoDate, setVideoDate] = useState('')
  const playerRef = useRef(null)
  const controllerRef = useRef(null)
  const searchRef = useRef(null)
  const searchValueRef = useRef(null)
  const searchModalRef = useRef(null)

  const appValue = useMemo(
    () => ({
      videoEvent,
      videoID,
      videoTitle,
      videoArtist,
      videoNumber,
      videoDate,
    }),
    [videoArtist, videoDate, videoEvent, videoID, videoNumber, videoTitle],
  )

  const appAction = useMemo(
    () => ({
      setVideoEvent,
      setVideoID,
      setVideoTitle,
      setVideoArtist,
      setVideoNumber,
      setVideoDate,
    }),
    [],
  )

  const appRef = useMemo(
    () => ({
      playerRef,
      controllerRef,
      searchRef,
      searchValueRef,
      searchModalRef,
    }),
    [],
  )

  return (
    <AppValueContext.Provider value={appValue}>
      <AppActionContext.Provider value={appAction}>
        <AppRefContext.Provider value={appRef}>
          {children}
        </AppRefContext.Provider>
      </AppActionContext.Provider>
    </AppValueContext.Provider>
  )
}

export { AppValueContext, AppActionContext, AppRefContext }
