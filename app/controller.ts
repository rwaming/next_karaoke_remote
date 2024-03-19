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

export function moveTime(videoEvent: null | YouTubeEvent): void {
  if (videoEvent !== null) {
    console.log('controll moveTime')
  }
}
