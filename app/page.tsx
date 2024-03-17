'use client'

import { Suspense, useEffect, useState } from 'react'
import Script from 'next/script'

export default function Home() {
  const [videoID, setVidoeID] = useState('')
  const [video, setVidoe] = useState('')
  const [videoDate, setVidoeDate] = useState('')

  // Load latest video
  useEffect(() => {
    gapi.client
      .init({
        apiKey: 'AIzaSyB1IOFOJ0D_e2-16KS4Tlol7mAiN2x9Fl4',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
        ],
        clientId: 'art.rwam.apps.googleusercontent.com',
        scope: 'profile',
      })
      .then(() => {
        //@ts-ignore
        return gapi.client.youtube.search
          .list({
            part: 'snippet',
            channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
            order: 'date',
          })
          .then((response: any) => {
            const latestVideo = response.result.items[0]
            const latestDate = latestVideo.publishTime
            setVidoe(latestVideo)
            setVidoeDate(latestDate)
          })
      })
  }, [])

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" />

      <div className="wrap">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="vedio"></div>
          <div className="control">
            <button type="button" className="pause bg-orange-300">
              ⏯️
            </button>
          </div>
        </Suspense>
      </div>
    </>
  )
}
