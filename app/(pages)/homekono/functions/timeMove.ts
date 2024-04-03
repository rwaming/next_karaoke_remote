import { type YouTubeEvent } from 'react-youtube'

export default function timeMove(
  className: string,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const time = video.getCurrentTime()

    if (className.includes('backward')) {
      const backwardTime = time - 5
      video.seekTo(backwardTime, true)
    } else if (className.includes('forward')) {
      const forwardTime = time + 5
      video.seekTo(forwardTime, true)
    }
  }
}
