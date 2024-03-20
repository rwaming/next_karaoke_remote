import { useCallback, useContext, type MouseEvent } from 'react'
import AppContext from './AppContext'
import {
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

  /** Select a function of a button clicked */
  const buttonOnclick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (id.includes('latest')) {
        void showLatestVideo(
          setVideoID,
          setVideoTitle,
          setVideoDate,
          setIsPlaying,
        )
      } else if (id.includes('playpause')) {
        playPause(videoEvent, isPlaying, setIsPlaying)
      } else if (id.includes('stop')) {
        stop(videoEvent, setIsPlaying)
      } else if (id.includes('time')) {
        moveTime(event, videoEvent)
      } else if (id.includes('volume')) {
        setVolume(event, videoEvent)
      } else if (id.includes('speed')) {
        setSpeed(event, videoEvent)
      }
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
