import { type SetState } from '@/utils/Types'
import { type YouTubeEvent } from 'react-youtube'

export default function playPause(
  videoEvent: null | YouTubeEvent,
  isPlaying: boolean,
  setIsPlaying: SetState<boolean>,
): void {
  if (videoEvent != null) {
    if (isPlaying) {
      videoEvent.target.pauseVideo()
      setIsPlaying(false)
    } else {
      videoEvent.target.playVideo()
      setIsPlaying(true)
    }
  }
}
