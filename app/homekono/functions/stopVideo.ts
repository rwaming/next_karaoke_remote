import { type YouTubeEvent } from 'react-youtube'

export default function stopVideo(videoEvent: null | YouTubeEvent): void {
  if (videoEvent != null) {
    videoEvent.target.stopVideo()
  }
}
