'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'
import YouTube from 'react-youtube'

export default function Home() {
  const [goNext, setGoNext] = useState(false)
  const [video, setVideo] = useState<any>(null)
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

  const videoOpts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      fs: 1,
    },
  }

  function useThisVideo(event: { target: any }) {
    setVideo(event.target)
  }

  function pause() {
    video && video.pauseVideo()
  }

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div className="app w-screen h-screen flex flex-col md:flex-row border">
        <div className="video border border-red-500 flex flex-col flex-grow w-screen md:w-auto">
          <div id="video-player" className="flex-grow bg-slate-800">
            {videoID && (
              <YouTube
                videoId={videoID}
                opts={videoOpts}
                onReady={useThisVideo}
              />
            )}
          </div>
          <div id="video-info">
            <p className="bg-yellow-300">{videoID}</p>
            <p className="bg-slate-300">{videoTitle}</p>
            <p>{videoDate}</p>
          </div>
        </div>

        <div className="control border border-blue-500 flex-grow md:flex-none">
          <button
            type="button"
            className="bg-red-300 p-1 block"
            onClick={() => setGoNext(true)}
          >
            Look for Latest Song button
          </button>
          <button
            type="button"
            className="pause bg-blue-300 block"
            onClick={pause}
          >
            ⏯️
          </button>
        </div>
      </div>
    </>
  )
}
