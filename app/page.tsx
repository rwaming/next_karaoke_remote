'use client'

import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from './AppContext'
import ControllerButton from './controllerButton'
import youtubeAPI from './youtubeAPI'
import closeSearchBox from './controller/closeSearchBox'

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

      <div
        id="app"
        className="w-screen h-screen flex flex-col md:flex-row justify-center bg-dark text-light"
      >
        <div
          ref={searchRef}
          id="search"
          className="flex w-screen flex-col fixed top-3/8vh left-0 h-3/4 md:top-0 md:z-10 md:h-1/2 bg-light text-dark"
        >
          <div id="search-header" className="w-full flex">
            <form
              id="search-form"
              name="search"
              action="#"
              className="flex flex-grow"
            >
              <fieldset
                id="search-form__searchbox"
                className="flex flex-grow relative"
              >
                <input
                  id="search-form__value"
                  name="search-form__value"
                  type="search"
                  minLength={1}
                  placeholder="ex) 윤하"
                  className="flex-grow bg-light-input p-2"
                  required
                />
                <fieldset
                  id="search-form__buttonbox"
                  className="absolute top-0 right-0"
                >
                  <input
                    id="search-form__clear"
                    type="reset"
                    value="✕"
                    className="text-dark text-opacity-30"
                  />
                  <input
                    id="search-form__submit"
                    type="submit"
                    value="🔍"
                    className="top-0 right-0"
                  />
                  <span className="bg-dark-input input-x-cover" />
                </fieldset>
              </fieldset>
            </form>
            <button
              id="search-close"
              type="button"
              className="text-dark"
              onClick={() => {
                closeSearchBox(playerRef, searchRef, controllerRef)
              }}
            >
              ✕
            </button>
          </div>
          <div id="search-list" className="flex-grow" />
        </div>

        <div
          ref={playerRef}
          id="player"
          className="flex-shrink basis-16-9vh flex flex-col md:flex-1 md:justify-center md:items-end"
        >
          <figure id="player-content" className="h-16-9vh relative w-full">
            <figcaption
              id="information"
              className="absolute top-0 right-0 w-full h-1/5 bg-dark text-xs"
            >
              <p>{videoID !== null && videoID}</p>
              <p>{videoID !== null && videoTitle}</p>
              <p>{videoID !== null && videoDate}</p>
            </figcaption>

            {videoID !== null && (
              <YouTube
                className="player-yt"
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
          </figure>
        </div>
        <div ref={controllerRef} id="controller" className="flex-grow">
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
