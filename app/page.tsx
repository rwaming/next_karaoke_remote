'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import { type YouTubeEvent } from 'react-youtube'
import youtubeAPI from './youtubeAPI'
import AppContext from './AppContext'
import ControllerButton from './controllerButton'
import Search from './search'
import Video from './video'

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
  const searchValueRef = useRef(null)
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
      searchValueRef,
      searchModalRef,
    }),
    [isPlaying, videoDate, videoEvent, videoID, videoTitle],
  )

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
        <Video />
        <div
          ref={controllerRef}
          id="controller"
          className="flex-grow md:relative md:z-20"
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

        <Search />
      </div>
    </AppContext.Provider>
  )
}
