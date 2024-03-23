import { type YouTubeEvent } from 'react-youtube'

export default function playPause(videoEvent: null | YouTubeEvent): void {
  if (videoEvent != null) {
    if (videoEvent.target.getPlayerState() === 1) {
      videoEvent.target.pauseVideo()
    } else {
      videoEvent.target.playVideo()
    }
  }
}
