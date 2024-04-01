import { createContext, useState, useRef, useMemo } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import { type Div, type SetState, type UseRef } from './Types'

const AppValueContext = createContext<{
  videoHref: string
  videoEvent: YouTubeEvent | null
  videoID: string
  videoTitle: string
  videoArtist: string
  videoNumber: string
  videoDate: string
}>({
  videoHref: '',
  videoEvent: null,
  videoID: '',
  videoTitle: '',
  videoArtist: '',
  videoNumber: '',
  videoDate: '',
})

const AppActionContext = createContext<{
  setVideoHref: SetState<string>
  setVideoEvent: SetState<YouTubeEvent | null>
  setVideoID: SetState<string>
  setVideoTitle: SetState<string>
  setVideoArtist: SetState<string>
  setVideoNumber: SetState<string>
  setVideoDate: SetState<string>
}>({
  setVideoHref: () => {},
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
}>({
  playerRef: { current: null },
  controllerRef: { current: null },
  searchRef: { current: null },
})

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [videoHref, setVideoHref] = useState<string>('')
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
      videoHref,
      videoEvent,
      videoID,
      videoTitle,
      videoArtist,
      videoNumber,
      videoDate,
    }),
    [
      videoArtist,
      videoDate,
      videoEvent,
      videoHref,
      videoID,
      videoNumber,
      videoTitle,
    ],
  )

  const appAction = useMemo(
    () => ({
      setVideoHref,
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
