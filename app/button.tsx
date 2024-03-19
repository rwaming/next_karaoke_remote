import { useCallback, useContext, type MouseEvent } from 'react'
import AppContext from './appContext'
import youtubeApiFirst from './youtubeApiFirst'

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

  const showlatestVideo = useCallback(() => {
    void youtubeApiFirst(setVideoID, setVideoTitle, setVideoDate)
    setIsPlaying(false)
  }, [setIsPlaying, setVideoDate, setVideoID, setVideoTitle])

  const playPause = useCallback(() => {
    if (videoEvent !== null) {
      if (isPlaying) {
        videoEvent.target.pauseVideo()
        setIsPlaying(false)
      } else {
        videoEvent.target.playVideo()
        setIsPlaying(true)
      }
    }
  }, [isPlaying, setIsPlaying, videoEvent])

  const moveTime = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (videoEvent !== null) {
        console.log('controll moveTime')

        const video = videoEvent.target
        const button = event.currentTarget.id
        const time = video.getCurrentTime()

        if (button === 'controller-backward') {
          const backwardTime = time - 5
          video.seekTo(backwardTime, true)
        } else {
          const forwardTime = time + 5
          video.seekTo(forwardTime, true)
        }
      }
    },
    [videoEvent],
  )

  const buttonOnclick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (id.match('latest') != null) {
        showlatestVideo()
      } else if (id.match('pauseplay') != null) {
        playPause()
      } else if (id.match('backward') != null || id.match('forward') != null) {
        moveTime(event)
      }
    },
    [id, moveTime, playPause, showlatestVideo],
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
