import { type MouseEvent } from 'react'
import { type YouTubeEvent } from 'react-youtube'

import { gapi } from 'gapi-script'

export async function showLatestVideo(
  setVideoID: React.Dispatch<React.SetStateAction<string | null>>,
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>,
  setVideoDate: React.Dispatch<React.SetStateAction<string>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    gapi.load('client', () => {
      gapi.client
        .init({
          apiKey: 'AIzaSyB1IOFOJ0D_e2-16KS4Tlol7mAiN2x9Fl4',
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
          ],
          clientId:
            '73717891696-055at71c0fqi44m975h68s1ktgiqrqob.apps.googleusercontent.com',
          scope: 'profile',
        })
        .then(resolve)
        .catch(reject)
    })
  })
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
  if (videoEvent !== null) {
    if (isPlaying) {
      videoEvent.target.pauseVideo()
      setIsPlaying(false)
    } else {
      videoEvent.target.playVideo()
      setIsPlaying(true)
    }
  }
}

export function moveTime(
  event: MouseEvent<HTMLButtonElement>,
  videoEvent: null | YouTubeEvent,
): void {
  if (videoEvent !== null) {
    console.log('controll moveTime')

    const video = videoEvent.target
    const button = event.currentTarget.id
    const time = video.getCurrentTime()

    if (button === 'controller-backward') {
      const backwardTime = time - 5
      video.seekTo(backwardTime, true)
    } else {
      const forwardTime = time + 5
      video.seekTo(forwardTime, true)
    }
  }
}
