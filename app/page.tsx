'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { gapi } from 'gapi-script'

export default function Home() {
  const [video, setVideo] = useState('video')
  const [videoID, setVideoID] = useState('videoID')
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')

  // Load latest video
  const firstVideoRef = useRef(async function youtubeApiFirst() {
    console.log('start to load')
    /* It should be used in really needed!!
    It resets when 4pm in Korea.
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
    })*/
  })

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div className="wrap">
        <div className="vedio">
          <p className="text-emerald-800">{videoID}</p>
          <p className="text-slate-600">{videoTitle}</p>
          <p>{videoDate}</p>
          <button
            type="button"
            className="border border-orange-200 bg-red-400 rounded-md p-1"
            onClick={() => firstVideoRef.current()}
          >
            Latest Song
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="pause border border-green-800 bg-blue-900 rounded-md p-1 px-2"
          >
            ⏯️
          </button>
        </div>
      </div>
    </>
  )
}
