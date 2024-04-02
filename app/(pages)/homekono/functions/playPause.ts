import { type YouTubeEvent } from 'react-youtube'

export default function playPause(playerEvent: null | YouTubeEvent): void {
  if (playerEvent != null) {
    if (playerEvent.target.getPlayerState() === 1) {
      playerEvent.target.pauseVideo()
    } else {
      playerEvent.target.playVideo()
    }
  }
}
