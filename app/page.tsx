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
  const [videoArtist, setVideoArtist] = useState('')
  const [videoNumber, setVideoNumber] = useState('')
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
      videoArtist,
      setVideoArtist,
      videoNumber,
      setVideoNumber,
      videoDate,
      setVideoDate,
      playerRef,
      controllerRef,
      searchRef,
      searchValueRef,
      searchModalRef,
    }),
    [videoArtist, videoDate, videoEvent, videoID, videoNumber, videoTitle],
  )
  useEffect(() => {
    void youtubeAPI()
  }, [])

  return (
    <AppContext.Provider value={appValue}>
      <Script src="https://apis.google.com/js/api.js" defer />
      <div id="app" className="h-screen w-screen bg-black text-light">
        <header id="header" className="absolute left-0 top-0 z-20 w-full">
          <h1 className="absolute left-0 top-0 p-6 text-xl mix-blend-difference xs:text-2xl">
            홈코노
          </h1>
          <div id="upate">
            <p className="absolute right-0 top-0 p-6 text-right text-xs opacity-80">
              마지막 업데이트:{' '}
              <time dateTime="2024-03-24" className="block xs:inline">
                2024. 03. 25. 월요일
              </time>
            </p>
          </div>
        </header>

        <main
          id="main"
          className="flex h-full w-full flex-col justify-center sm:flex-row">
          <Player />
          <Search />
          <Controller />
        </main>

        <footer
          id="footer"
          className="absolute right-0 top-0 z-20 flex justify-center gap-4 p-3 opacity-80 sm:bottom-0 sm:w-full sm:justify-end">
          <address id="contact" className="flex gap-4 text-sm not-italic">
            <div
              id="contact-name"
              className="flex h-full flex-col items-center justify-center text-center font-semibold sm:flex-row sm:gap-2">
              <p id="contact-name__en">RWAM</p>
              <p id="contact-name__ko" className="hidden xs:block">
                김성주
              </p>
            </div>

            <div
              id="contact-info"
              className="flex h-full flex-col justify-around gap-1 font-light">
              <p id="contact-info__email" className="text-xs">
                art.rwam@gmail.com
              </p>
              <p id="contact-info__phone" className="hidden text-xs xs:block">
                +82 010-9716-1132
              </p>
            </div>

            <div id="contact-sns" className="hidden items-center gap-3 xs:flex">
              <Link
                href="https://www.instagram.com/rwam__kn"
                target="_blank"
                aria-label="contact-sns__instagram">
                <Image
                  id="contact-sns__instagram"
                  src="/icon_instagram.png"
                  width={40}
                  height={40}
                  alt="contact_instagram"
                  className="h-7 w-7"
                />
              </Link>
              <Link
                href="https://blog.naver.com/rwaming"
                target="_blank"
                aria-label="contact-sns__naver-blog">
                <Image
                  id="contact-sns__naver-blog"
                  src="/icon_naver.png"
                  width={40}
                  height={40}
                  alt="contact_naver_blog"
                  className="h-7 w-7"
                />
              </Link>
            </div>
          </address>
        </footer>
      </div>
    </AppContext.Provider>
  )
}
