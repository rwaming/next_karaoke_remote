import { type SetState } from '@/utils/Types'
import { type YouTubeEvent } from 'react-youtube'

export default function stopVideo(
  videoEvent: null | YouTubeEvent,
  setIsPlaying: SetState<boolean>,
): void {
  if (videoEvent != null) {
    videoEvent.target.stopVideo()
    setIsPlaying(false)
  }
}
