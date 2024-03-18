'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'
import YouTube from 'react-youtube'

export default function Home() {
  const videoOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1, //자동 재생 여부
      modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
      loop: 0,
      controls: 0,
    },
  }

  const [goNext, setGoNext] = useState(false)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')

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
        <div className="video border border-red-500">
          <div id="player">
            {videoID && (
              <>
                <YouTube videoId={videoID} opts={videoOpts} />
                <p className="bg-yellow-300">{videoID}</p>
                <p className="bg-slate-300">{videoTitle}</p>
                <p>{videoDate}</p>
              </>
            )}
          </div>

          <button
            type="button"
            className="bg-red-300 p-1"
            onClick={() => setGoNext(true)}
          >
            Look for Latest Song button
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
