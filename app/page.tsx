'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { gapi } from 'gapi-script'

export default function Home() {
  const [video, setVideo] = useState('idle')
  const [videoID, setVideoID] = useState('idle')
  const [videoTitle, setVideoTitle] = useState('idle')
  const [videoDate, setVideoDate] = useState('idle')

  // Load latest video
  useEffect(() => {
    async function youtubeApiFirst() {
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
          .then(() => {})
          .then(() => {
            //@ts-ignore
            return gapi.client.youtube.search
              .list({
                part: 'snippet',
                channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
                order: 'date',
              })
              .then((response: any) => {
                const latestVideoInfo = response.result.items[0]
                const latestVideoID = latestVideoInfo.id.videoId
                const latestVideoTitle = latestVideoInfo.snippet.description
                const latestVideoDate = latestVideoInfo.snippet.publishedAt
                setVideoID(latestVideoID)
                setVideoTitle(latestVideoTitle)
                setVideoDate(latestVideoDate)
              })
          })
      })
    }
    youtubeApiFirst()
  }, [])

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div className="wrap">
        <div className="vedio">
          <p>{videoID}</p>
          <p>{videoTitle}</p>
          <p>{videoDate}</p>
        </div>
        <div className="control">
          <button type="button" className="pause bg-orange-300">
            ⏯️
          </button>
        </div>
      </div>
    </>
  )
}
