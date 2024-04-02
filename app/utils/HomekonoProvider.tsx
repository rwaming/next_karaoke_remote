import { createContext, useState, useRef, useMemo } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import { type Div, type SetState, type UseRef } from './Types'

const HomekonoValueContext = createContext<{
  videoHref: string
  playerEvent: YouTubeEvent | null
  playerState: string
}>({
  videoHref: '',
  playerEvent: null,
  playerState: '',
})

const HomekonoActionContext = createContext<{
  setVideoHref: SetState<string>
  setPlayerEvent: SetState<YouTubeEvent | null>
  setPlayerState: SetState<string>
}>({
  setVideoHref: () => {},
  setPlayerEvent: () => {},
  setPlayerState: () => {},
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
  const [playerState, setPlayerState] = useState('')
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
      playerState,
    }),
    [playerEvent, playerState, videoHref],
  )

  const appAction = useMemo(
    () => ({
      setVideoHref,
      setPlayerEvent,
      setPlayerState,
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
