import { createContext, useState, useRef, useMemo } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import { type Div, type SetState, type UseRef } from './Types'

const HomekonoValueContext = createContext<{
  videoHref: string
  playerEvent: YouTubeEvent | null
  videoID: string
  videoTitle: string
  videoArtist: string
  videoNumber: string
  videoDate: string
}>({
  videoHref: '',
  playerEvent: null,
  videoID: '',
  videoTitle: '',
  videoArtist: '',
  videoNumber: '',
  videoDate: '',
})

const HomekonoActionContext = createContext<{
  setVideoHref: SetState<string>
  setPlayerEvent: SetState<YouTubeEvent | null>
  setVideoID: SetState<string>
  setVideoTitle: SetState<string>
  setVideoArtist: SetState<string>
  setVideoNumber: SetState<string>
  setVideoDate: SetState<string>
}>({
  setVideoHref: () => {},
  setPlayerEvent: () => {},
  setVideoID: () => {},
  setVideoTitle: () => {},
  setVideoArtist: () => {},
  setVideoNumber: () => {},
  setVideoDate: () => {},
})

const HomekonoRefContext = createContext<{
  playerRef: UseRef<Div>
  playerLoadingRef: UseRef<Div>
  playerReadyRef: UseRef<Div>
  controllerRef: UseRef<Div>
  searchRef: UseRef<Div>
}>({
  playerRef: { current: null },
  playerLoadingRef: { current: null },
  playerReadyRef: { current: null },
  controllerRef: { current: null },
  searchRef: { current: null },
})

export default function HomekonoProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [videoHref, setVideoHref] = useState<string>('')
  const [playerEvent, setPlayerEvent] = useState<YouTubeEvent | null>(null)
  const [videoID, setVideoID] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoArtist, setVideoArtist] = useState('')
  const [videoNumber, setVideoNumber] = useState('')
  const [videoDate, setVideoDate] = useState('')
  const playerRef = useRef(null)
  const playerLoadingRef = useRef<Div>(null)
  const playerReadyRef = useRef<Div>(null)
  const controllerRef = useRef(null)
  const searchRef = useRef(null)
  const searchValueRef = useRef(null)
  const searchModalRef = useRef(null)

  const appValue = useMemo(
    () => ({
      videoHref,
      playerEvent,
      videoID,
      videoTitle,
      videoArtist,
      videoNumber,
      videoDate,
    }),
    [
      videoArtist,
      videoDate,
      playerEvent,
      videoHref,
      videoID,
      videoNumber,
      videoTitle,
    ],
  )

  const appAction = useMemo(
    () => ({
      setVideoHref,
      setPlayerEvent,
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
      playerLoadingRef,
      playerReadyRef,
      controllerRef,
      searchRef,
      searchValueRef,
      searchModalRef,
    }),
    [],
  )

  return (
    <HomekonoValueContext.Provider value={appValue}>
      <HomekonoActionContext.Provider value={appAction}>
        <HomekonoRefContext.Provider value={appRef}>
          {children}
        </HomekonoRefContext.Provider>
      </HomekonoActionContext.Provider>
    </HomekonoValueContext.Provider>
  )
}

export { HomekonoValueContext, HomekonoActionContext, HomekonoRefContext }
