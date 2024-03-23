import { type ButtonType } from '@/utils/Types'
import { type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'

export default function moveTime(
  event: MouseEvent<ButtonType>,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const button = event.currentTarget.id
    const time = video.getCurrentTime()
    if (button.includes('backward')) {
      const backwardTime = time - 5
      video.seekTo(backwardTime, true)
    } else if (button.includes('forward')) {
      const forwardTime = time + 5
      video.seekTo(forwardTime, true)
    }
  }
}
