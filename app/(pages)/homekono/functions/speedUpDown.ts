import { type YouTubeEvent } from 'react-youtube'

export default function speedUpDown(
  className: string,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const speed = video.getPlaybackRate()

    if (className.includes('down') && speed > 0.5) {
      const speedDown = speed - 0.1
      video.setPlaybackRate(speedDown)
    } else if (className.includes('up') && speed < 2) {
      const speedUp = speed + 0.1
      video.setPlaybackRate(speedUp)
    }
  }
}
