import { type YouTubeEvent } from 'react-youtube'

export default function stop(
  videoEvent: null | YouTubeEvent,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  if (videoEvent != null) {
    videoEvent.target.stopVideo()
    setIsPlaying(false)
  }
}
