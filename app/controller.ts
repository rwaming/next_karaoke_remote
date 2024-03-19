import { type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'

export function playPause(
  videoEvent: null | YouTubeEvent,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  if (videoEvent !== null) {
    if (isPlaying) {
      videoEvent.target.pauseVideo()
      setIsPlaying(false)
    } else {
      videoEvent.target.playVideo()
      setIsPlaying(true)
    }
  }
}

export function moveTime(
  event: MouseEvent<HTMLButtonElement>,
  videoEvent: null | YouTubeEvent,
): void {
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
}
