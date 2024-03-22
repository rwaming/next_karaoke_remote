'use client'

import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from './AppContext'
import ControllerButton from './controllerButton'
import youtubeAPI from './youtubeAPI'
import searchBoxClose from './controller/searchBoxClose'

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
  const controllerRef = useRef(null)
  const searchRef = useRef(null)
  const searchModalRef = useRef(null)

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
      controllerRef,
      searchRef,
      searchModalRef,
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

        <div
          ref={searchRef}
          id="search"
          className="hidden w-screen flex-col fixed z-10 bg-light text-dark"
        >
          <div id="search-header" className="w-full flex">
            <form
              id="search-form"
              name="search"
              action="#"
              className="flex flex-grow"
            >
              <fieldset
                id="search-form__inputbox"
                className="flex flex-grow x-cover-box"
              >
                <input
                  id="search-form__value"
                  name="search-form__value"
                  type="search"
                  minLength={1}
                  placeholder="ex) 윤하 먹구름"
                  className="x-cover-target bg-light-input border p-2 text-center"
                  required
                />
                <fieldset
                  id="search-form__buttonbox"
                  className="x-cover-buttonbox"
                >
                  <input
                    id="search-form__clear"
                    type="reset"
                    value="✕"
                    className="text-dark text-opacity-30 pr-2"
                  />
                  <span className="bg-light-input x-cover-sticker mr-4" />
                  <input
                    id="search-form__search"
                    type="submit"
                    value="🔍"
                    className="x-cover-instead mr-2 text-2xl"
                    onClick={(event) => {
                      event.preventDefault()
                    }}
                  />
                </fieldset>
              </fieldset>
            </form>
          </div>
          <div id="search-list" className="flex-grow relative" />
          <button
            id="search-close"
            type="button"
            className="hidden text-dark absolute right-0 bottom-0 p-4 md:block"
            onClick={() => {
              searchBoxClose(
                playerRef,
                controllerRef,
                searchRef,
                searchModalRef,
              )
            }}
          >
            ✕
          </button>
        </div>
        <div
          ref={searchModalRef}
          id="search-modal"
          className="hidden bg-gray-800 bg-opacity-50 w-screen h-screen absolute top-0 left-0"
        />
      </div>
    </AppContext.Provider>
  )
}
