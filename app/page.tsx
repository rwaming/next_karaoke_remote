'use client'

import { useEffect, useState, type ReactElement, useRef } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'
import YouTube, { type YouTubeEvent } from 'react-youtube'

export default function Home(): ReactElement {
  const [goVideo, setGoVideo] = useState(false)
  const [videoEvent, setVideoEvent] = useState<null | YouTubeEvent>(null)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')
  const [isPlaying, setIsPlaying] = useState(false)

  // Load latest video
  useEffect(() => {
    if (goVideo) {
      void youtubeApiFirst(setVideoID, setVideoTitle, setVideoDate)
      setGoVideo(false)
      setIsPlaying(false)
    }
  }, [goVideo])

  const useThisVideo = useRef((event: YouTubeEvent) => {
    setVideoEvent(event)
    setIsPlaying(true)
  })

  function playPause(): void {
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

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div id="app" className="w-screen h-screen border">
        <div id="video" className=" border border-red-500">
          <div id="video-player" className="bg-slate-800">
            {videoID !== null && (
              <YouTube
                videoId={videoID}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    fs: 1,
                  },
                }}
                onReady={useThisVideo.current}
              />
            )}
          </div>
          <div id="video-info" className="border border-orange-500">
            <p className="bg-yellow-300">{videoID !== null && videoID}</p>
            <p className="bg-slate-300">{videoID !== null && videoTitle}</p>
            <p className="bg-orange-300">{videoID !== null && videoDate}</p>
          </div>
        </div>

        <div id="controller" className="border border-blue-500">
          <button
            type="button"
            className="bg-red-300 p-1 block"
            onClick={() => {
              setGoVideo(true)
            }}
          >
            Look for Latest Song button
          </button>
          <button
            type="button"
            className="pause bg-blue-300 block"
            onClick={playPause}
          >
            ⏯️
          </button>
        </div>
      </div>
    </>
  )
}
