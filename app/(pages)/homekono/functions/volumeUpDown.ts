import { type YouTubeEvent } from 'react-youtube'

export default function speedUpDown(
  className: string,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const volume = video.getVolume()

    if (className.includes('down')) {
      const volumeDown = volume - 5
      video.setVolume(volumeDown)
    } else if (className.includes('up')) {
      const volumeUp = volume + 5
      video.setVolume(volumeUp)
    } else if (className.includes('mute')) {
      if (video.isMuted() === false) {
        video.mute()
      } else {
        video.unMute()
      }
    }
  }
}
