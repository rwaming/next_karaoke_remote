'use client'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'

export default function Home() {
  const [goNext, setGoNext] = useState(false)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')

  const videoRef = useRef(null)

  // Load latest video
  useEffect(() => {
    if (goNext) {
      youtubeApiFirst(setVideoID, setVideoTitle, setVideoDate)
      setGoNext(false)
    }
  }, [goNext, videoID])

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div className="app w-screen h-screen flex md:flex-row border">
        <div className="vedio border border-red-500">
          {videoID && (
            <video
              ref={videoRef}
              className="bg-emerald-300"
              width="1024px"
              controls
              autoPlay
            >
              <source
                src={`https://www.youtube.com/watch?v=${videoID}`}
                type="video/mp4"
              ></source>
            </video>
          )}

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
