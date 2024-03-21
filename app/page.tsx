'use client'

import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from './AppContext'
import ControllerButton from './controllerButton'
import youtubeAPI from './youtubeAPI'

export default function App({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}): JSX.Element {
  const [videoEvent, setVideoEvent] = useState<null | YouTubeEvent>(null)
  const [videoID, setVideoID] = useState<string | null>(null)
  const [videoTitle, setVideoTitle] = useState('videoTitle')
  const [videoDate, setVideoDate] = useState('videoDate')
  const [isPlaying, setIsPlaying] = useState(false)

  const playerRef = useRef(null)
  const searchRef = useRef(null)
  const controllerRef = useRef(null)

  const appValue = useMemo(
    () => ({
      videoEvent,
      setVideoEvent,
      videoID,
      setVideoID,
      videoTitle,
      setVideoTitle,
      videoDate,
      setVideoDate,
      isPlaying,
      setIsPlaying,
      playerRef,
      searchRef,
      controllerRef,
    }),
    [isPlaying, videoDate, videoEvent, videoID, videoTitle],
  )

  const useThisVideo = useCallback((event: YouTubeEvent) => {
    setVideoEvent(event)
    setIsPlaying(true)
  }, [])

  useEffect(() => {
    void youtubeAPI()
  }, [])

  return (
    <AppContext.Provider value={appValue}>
      <Script src="https://apis.google.com/js/api.js" defer />

      <div id="app" className="w-screen h-screen flex flex-col md:grid">
        <div
          ref={playerRef}
          id="player"
          className="flex-shrink flex-basis-16/9vw bg-slate-800"
        >
          {videoID !== null && (
            <YouTube
              videoId={videoID}
              opts={{
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  controls: 0,
                  fs: 1,
                },
              }}
              onReady={useThisVideo}
            />
          )}
        </div>
        <div id="information" className="flex-shrink bg-pink-300 text-xs">
          <p className="bg-yellow-300">{videoID !== null && videoID}</p>
          <p className="bg-slate-300">{videoID !== null && videoTitle}</p>
          <p className="bg-orange-300">{videoID !== null && videoDate}</p>
        </div>

        <div
          ref={searchRef}
          id="search"
          className="hidden w-screen flex-col fixed top-1/4 left-0 h-3/4 md:top-0 md:h-1/2 bg-lime-400"
        >
          <div id="search-box" className="w-full flex">
            <form
              id="search-form"
              name="search"
              action="#"
              className="flex flex-grow relative"
            >
              <input
                id="search-input"
                name="search-keyword"
                type="text"
                placeholder="ex) 윤하"
                className="flex-grow bg-gray-200"
              />
              <fieldset className="absolute top-0 right-0">
                <input
                  id="search-clear"
                  type="reset"
                  value="✕"
                  className="text-gray-400"
                />
                <input id="search-submit" type="submit" value="🔍" />
              </fieldset>
            </form>
            <button id="search-close" type="button" className="text-green-700">
              ✕
            </button>
          </div>
          <div id="search-list" className="flex-grow bg-green-500 h-5" />
        </div>

        <div
          ref={controllerRef}
          id="controller"
          className="flex-grow bg-sky-300 md:block"
        >
          <ControllerButton id="controller-latest" text="Latest Song" />
          <ControllerButton id="controller-search" text="🔍" />
          <ControllerButton id="controller-playpause" text="⏯" />
          <ControllerButton id="controller-stop" text="⏹" />
          <ControllerButton id="controller-timebackward" text="◀️" />
          <ControllerButton id="controller-timeforward" text="▶️" />
          <ControllerButton id="controller-volumeup" text="▲" />
          <ControllerButton id="controller-volumedown" text="▼" />
          <ControllerButton id="controller-volumemute" text="🔇" />
          <ControllerButton id="controller-speeddown" text="⏪" />
          <ControllerButton id="controller-speedup" text="⏩" />
          <ControllerButton id="controller-applause" text="👏" />
        </div>
      </div>
    </AppContext.Provider>
  )
}
