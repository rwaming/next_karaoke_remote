import { type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'

export default function setSpeed(
  event: MouseEvent<HTMLButtonElement>,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const button = event.currentTarget.id
    const speed = video.getPlaybackRate()
    if (button.includes('down') && speed > 0.5) {
      const speedDown = speed - 0.1
      video.setPlaybackRate(speedDown)
    } else if (button.includes('up') && speed < 2) {
      const speedUp = speed + 0.1
      video.setPlaybackRate(speedUp)
    }
  }
}
