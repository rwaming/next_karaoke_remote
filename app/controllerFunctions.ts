import { type MutableRefObject, type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'

import { gapi } from 'gapi-script'

export async function showLatestVideo(
  setVideoID: React.Dispatch<React.SetStateAction<string | null>>,
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>,
  setVideoDate: React.Dispatch<React.SetStateAction<string>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> {
  const latestVideoList = await gapi.client.youtube.search.list({
    part: 'snippet',
    channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
    order: 'date',
  })
  const latestVideoInfo = latestVideoList.result.items[0]
  const latestVideoID: string = latestVideoInfo.id.videoId
  const latestVideoTitle: string = latestVideoInfo.snippet.title
  const latestVideoDate: string = latestVideoInfo.snippet.publishedAt
  setVideoID(latestVideoID)
  setVideoTitle(latestVideoTitle)
  setVideoDate(latestVideoDate)
  setIsPlaying(false)
}

export function playPause(
  videoEvent: null | YouTubeEvent,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  if (videoEvent != null) {
    if (isPlaying) {
      videoEvent.target.pauseVideo()
      setIsPlaying(false)
    } else {
      videoEvent.target.playVideo()
      setIsPlaying(true)
    }
  }
}

export function stop(
  videoEvent: null | YouTubeEvent,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  if (videoEvent != null) {
    videoEvent.target.stopVideo()
    setIsPlaying(false)
  }
}

export function moveTime(
  event: MouseEvent<HTMLButtonElement>,
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

export function setVolume(
  event: MouseEvent<HTMLButtonElement>,
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

export function setSpeed(
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

export function applause(
  audioRefs: Array<MutableRefObject<HTMLAudioElement | null>>,
): void {
  const refLength = audioRefs.length

  // 1. Find a idle audio => play
  for (let i = 0; i < refLength; i++) {
    const audio = audioRefs[i].current
    if (audio !== null && audio.paused) {
      console.log('1. Find a idle audio => play')
      void audio.play()
      return
    }
  }
  // All audioes are playing

  // 2. Find a oldest audio => play
  let prevPlayedTime = 8 // max 7sec
  for (let i = 0; i < refLength; i++) {
    const audio = audioRefs[i].current
    if (audio !== null) {
      const playedTime = audio.currentTime

      // audio 1: just save playTime
      // Find a oldest audio in 2~4 => replay
      if (i > 0) {
        console.log('2. Find a oldest audio => play')

        if (playedTime > prevPlayedTime) {
          void audio.play()
          return
        }
        // 2~4 is newer => replay 1
      } else if (i === refLength - 1) {
        console.log('3. 2~4 is newer => replay 1')

        void audioRefs[0].current?.play()
        return
      }

      // Save played time of 1~3
      prevPlayedTime = playedTime
    }
  }
}
