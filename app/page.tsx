'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import { type YouTubeEvent } from 'react-youtube'

import Search from './components/search'
import Player from './components/player'
import Controller from './components/controller'

import AppContext from './utils/AppContext'
import youtubeAPI from './youtubeAPI'

export default function App(): JSX.Element {
  const [videoEvent, setVideoEvent] = useState<YouTubeEvent | null>(null)
  const [videoID, setVideoID] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDate, setVideoDate] = useState('')
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
        <Player />
        <Controller />
        <Search />
      </div>
    </AppContext.Provider>
  )
}
