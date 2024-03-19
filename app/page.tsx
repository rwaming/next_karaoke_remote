'use client'

import { useState, type ReactElement, useCallback } from 'react'
import Script from 'next/script'
import youtubeApiFirst from '@/youtubeApiFirst'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import { playPause, volume } from './controller'

export default function Home(): ReactElement {
  const [videoEvent, setVideoEvent] = useState<null | YouTubeEvent>(null)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')
  const [isPlaying, setIsPlaying] = useState(false)

  const goVideo = useCallback(() => {
    void youtubeApiFirst(setVideoID, setVideoTitle, setVideoDate)
    setIsPlaying(false)
  }, [])

  const useThisVideo = useCallback((event: YouTubeEvent) => {
    setVideoEvent(event)
    setIsPlaying(true)
  }, [])

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
                onReady={useThisVideo}
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
            id="controller-newvideo"
            className="bg-red-300 p-1 block"
            onClick={goVideo}
          >
            Look for Latest Song button
          </button>
          <button
            type="button"
            id="controller-pause"
            className=" bg-blue-300 block"
            onClick={() => {
              playPause(videoEvent, isPlaying, setIsPlaying)
            }}
          >
            ⏯️
          </button>
          <button
            type="button"
            id="controller-volumeup"
            className=" bg-blue-300 block"
            onClick={() => {
              volume(videoEvent)
            }}
          >
            🔼
          </button>
          <button
            type="button"
            id="controller-volumedown"
            className=" bg-blue-300 block"
            onClick={() => {
              volume(videoEvent)
            }}
          >
            🔽
          </button>
        </div>
      </div>
    </>
  )
}
