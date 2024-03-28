import {
  type ReactNode,
  createContext,
  useState,
  useRef,
  useMemo,
  useContext,
  useEffect,
} from 'react'
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
function useAppValue(): {
  videoEvent: YouTubeEvent | null
  videoID: string
  videoTitle: string
  videoArtist: string
  videoNumber: string
  videoDate: string
} {
  const value = useContext(AppValueContext)
  if (value === undefined) {
    throw new Error('AppValueContext is not found')
  }
  return value
}

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
function useAppAction(): {
  setVideoEvent: SetState<YouTubeEvent | null>
  setVideoID: SetState<string>
  setVideoTitle: SetState<string>
  setVideoArtist: SetState<string>
  setVideoNumber: SetState<string>
  setVideoDate: SetState<string>
} {
  const value = useContext(AppActionContext)
  if (value === undefined) {
    throw new Error('AppValueContext is not found')
  }
  return value
}

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
function useAppRef(): {
  playerRef: UseRef<Div>
  controllerRef: UseRef<Div>
  searchRef: UseRef<Div>
  searchValueRef: UseRef<Input>
  searchModalRef: UseRef<Button>
} {
  const value = useContext(AppRefContext)
  if (value === undefined) {
    throw new Error('AppValueContext is not found')
  }
  return value
}

export default function AppProvider({
  children,
}: {
  children: ReactNode
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

  useEffect(() => {
    console.log(playerRef.current)
    console.log(controllerRef.current)
  }, [])
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

export { useAppValue, useAppAction, useAppRef }
