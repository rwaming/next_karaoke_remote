import { type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import { type Button } from '../../utils/Types'

export default function speedUpDown(
  event: MouseEvent<Button>,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const button = event.currentTarget.id
    const volume = video.getVolume()

    if (button.includes('down')) {
      const volumeDown = volume - 5
      video.setVolume(volumeDown)
    } else if (button.includes('up')) {
      const volumeUp = volume + 5
      video.setVolume(volumeUp)
    } else if (button.includes('mute')) {
      if (video.isMuted() === false) {
        video.mute()
      } else {
        video.unMute()
      }
    }
  }
}
