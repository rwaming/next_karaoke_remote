import { useCallback, useContext, type MouseEvent } from 'react'
import { moveTime, playPause, showLatestVideo } from './controller'
import AppContext from './appContext'

export default function ControllerButton(props: {
  id: string
  text: string
}): JSX.Element {
  const { id, text } = props
  const {
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
  } = useContext(AppContext)

  const buttonOnclick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (id.match('latest') != null) {
        void showLatestVideo(
          setVideoID,
          setVideoTitle,
          setVideoDate,
          setIsPlaying,
        )
      } else if (id.match('playpause') != null) {
        playPause(videoEvent, isPlaying, setIsPlaying)
      } else if (id.match('backward') != null || id.match('forward') != null) {
        moveTime(event, videoEvent)
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
      className=" bg-blue-300 block"
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        buttonOnclick(event)
      }}
    >
      {text}
    </button>
  )
}
