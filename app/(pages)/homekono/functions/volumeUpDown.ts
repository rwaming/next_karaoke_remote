import { type YouTubeEvent } from 'react-youtube'

export default function speedUpDown(
  className: string,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent != null) {
    const video = videoEvent.target
    const volume = video.getVolume()

    if (className.includes('down')) {
      console.log('down')
      const volumeDown = volume - 5
      video.setVolume(volumeDown)
      console.log(volume)
    } else if (className.includes('up')) {
      console.log('up')
      const volumeUp = volume + 5
      video.setVolume(volumeUp)
      console.log(volume)
    } else if (className.includes('mute')) {
      console.log('mute')
      if (video.isMuted() === false) {
        video.mute()
      } else {
        video.unMute()
      }
    }
  }
}
