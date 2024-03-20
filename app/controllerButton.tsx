import {
  type MutableRefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type MouseEvent,
} from 'react'
import AppContext from './AppContext'
import {
  applause,
  moveTime,
  playPause,
  setSpeed,
  setVolume,
  showLatestVideo,
  stop,
} from './controllerFunctions'

export default function ControllerButton({
  id,
  text,
}: {
  id: string
  text: string
}): JSX.Element {
  const {
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
  } = useContext(AppContext)

  const applauseRef1: MutableRefObject<HTMLAudioElement | null> = useRef(null)
  const applauseRef2: MutableRefObject<HTMLAudioElement | null> = useRef(null)
  const applauseRef3: MutableRefObject<HTMLAudioElement | null> = useRef(null)
  const applauseRef4: MutableRefObject<HTMLAudioElement | null> = useRef(null)

  const buttonOnclick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      void (
        id.includes('latest') &&
        showLatestVideo(setVideoID, setVideoTitle, setVideoDate, setIsPlaying)
      )
      id.includes('playpause') && playPause(videoEvent, isPlaying, setIsPlaying)
      id.includes('stop') && stop(videoEvent, setIsPlaying)
      id.includes('time') && moveTime(event, videoEvent)
      id.includes('volume') && setVolume(event, videoEvent)
      id.includes('speed') && setSpeed(event, videoEvent)
      id.includes('applause') &&
        applause([applauseRef1, applauseRef2, applauseRef3, applauseRef4])
    },
    [
      id,
      isPlaying,
      setIsPlaying,
      setVideoDate,
      setVideoID,
      setVideoTitle,
      videoEvent,
    ],
  )

  const applauseAudioes = useMemo(
    () =>
      [...Array(4)].map((_, index) => (
        <audio
          ref={() => {
            if (index === 0) {
              return applauseRef1
            }
            if (index === 1) {
              return applauseRef2
            }
            if (index === 2) {
              return applauseRef3
            }
            return applauseRef4
          }}
          key={`${id}__audio-${index + 1}`}
          id={`${id}__audio-${index + 1}`}
          preload="auto"
        >
          <source src="/applause.mp3" type="audio/mpeg" />
          <track
            src="/applause_en.vtt"
            kind="captions"
            srcLang="en"
            label="English"
          />
          <track
            src="/applause_ko.vtt"
            kind="captions"
            srcLang="ko"
            label="Korean"
          />
        </audio>
      )),
    [id],
  )

  return (
    <>
      <button
        type="button"
        id={id}
        className="border border-blue-300 block"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          buttonOnclick(event)
        }}
      >
        {text}
      </button>
      {id.includes('applause') && (
        <div id={`${id}__audio-list`}>{applauseAudioes}</div>
      )}
    </>
  )
}
