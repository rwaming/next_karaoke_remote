'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'
import YouTube from 'react-youtube'

export default function Home() {
  const [goVideo, setGoVideo] = useState(false)
  const [video, setVideo] = useState<any>(null)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')
  const [isPlaying, setIsPlaying] = useState(false)

  // Load latest video
  useEffect(() => {
    if (goVideo) {
      youtubeApiFirst(setVideoID, setVideoTitle, setVideoDate)
      setGoVideo(false)
      setIsPlaying(false)
    }
  }, [goVideo])

  function useThisVideo(event: { target: any }) {
    setVideo(event.target)
  }

  function pause() {
    if (video) {
      isPlaying && video.pauseVideo()
      !isPlaying && video.pausePlay()
    }
  }

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div id="app" className="w-screen h-screen border">
        <div id="video" className=" border border-red-500">
          <div id="video-player" className="bg-slate-800">
            {videoID && (
              <YouTube
                videoId={videoID}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    fs: 1,
                  },
                }}
                onReady={useThisVideo}
              />
            )}
          </div>
          <div id="video-info" className="border border-orange-500">
            <p className="bg-yellow-300">{videoID && videoID}</p>
            <p className="bg-slate-300">{videoID && videoTitle}</p>
            <p className="bg-orange-300">{videoID && videoDate}</p>
          </div>
        </div>

        <div id="controller" className="border border-blue-500">
          <button
            type="button"
            className="bg-red-300 p-1 block"
            onClick={() => setGoVideo(true)}
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
