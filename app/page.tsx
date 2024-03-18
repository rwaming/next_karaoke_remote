'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import youtubeApiFirst from './youtubeApiFirst'

export default function Home() {
  const [goNext, setGoNext] = useState(false)
  const [video, setVideo] = useState('video')
  const [videoID, setVideoID] = useState('videoID')
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')

  // Load latest video
  useEffect(() => {}, [])

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div className="app w-screen h-screen flex md:flex-row border">
        <div className="vedio border border-red-500">
          <p className="bg-emerald-300">{videoID}</p>
          <p className="bg-slate-300">{videoTitle}</p>
          <p>{videoDate}</p>
          <button
            type="button"
            className="bg-red-300 p-1"
            onClick={() => setGoNext(true)}
          >
            Latest Song
          </button>
        </div>
        <div className="control border border-blue-500">
          <button type="button" className="pause bg-blue-300">
            ⏯️
          </button>
        </div>
      </div>
    </>
  )
}
