import { useCallback, useContext, useRef, type MouseEvent } from 'react'
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

  const applauseRef = useRef(null)

  /** Select a function of a button clicked */
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
      id.includes('applause') && applause()
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

  return (
    <button
      ref={id.includes('applause') ? applauseRef : null}
      type="button"
      id={id}
      className="border border-blue-300 block"
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        buttonOnclick(event)
      }}
    >
      {text}
    </button>
  )
}
