'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Script from 'next/script'
import { type YouTubeEvent } from 'react-youtube'

import Link from 'next/link'
import Image from 'next/image'
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
      playerRef,
      controllerRef,
      searchRef,
      searchValueRef,
      searchModalRef,
    }),
    [videoDate, videoEvent, videoID, videoTitle],
  )
  useEffect(() => {
    void youtubeAPI()
  }, [])

  return (
    <AppContext.Provider value={appValue}>
      <Script src="https://apis.google.com/js/api.js" defer />
      <div id="app" className="h-screen w-screen bg-dark text-light">
        <hgroup
          id="title"
          className="absolute left-0 top-0 z-10 bg-dark bg-opacity-75 bg-blend-darken"
        >
          <h1 className="m-2 inline-block">홈코노</h1>
          <p className="inline-block text-xs">
            마지막 업데이트: 2024. 03. 24. 일요일
          </p>
        </hgroup>
        <main
          id="main"
          className="flex h-full w-full flex-col justify-center md:flex-row"
        >
          <Player />
          <Search />
          <Controller />
        </main>
        <address
          id="contact"
          className="absolute bottom-0 right-0 m-3 flex gap-3 opacity-75"
        >
          <Link href="https://www.instagram.com/rwam__kn" target="_blank">
            <Image
              src="/icon_instagram.png"
              width={40}
              height={40}
              alt="contact_instagram"
              className="h-8 w-8"
            />
          </Link>
          <Link href="https://blog.naver.com/rwaming" target="_blank">
            <Image
              src="/icon_naver.png"
              width={40}
              height={40}
              alt="contact_naver"
              className="h-8 w-8"
            />
          </Link>
        </address>
      </div>
    </AppContext.Provider>
  )
}
