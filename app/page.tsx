'use client'

import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { type YouTubeEvent } from 'react-youtube'
import AppContext from './utils/AppContext'
import ControllerButton from './components/controllerButton'
import Search from './components/search'
import Player from './components/player'

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
  const loadGapi = useCallback(async (): Promise<void> => {
    await import('gapi-script')
    gapi.load('client', () => {
      void gapi.client.init({
        apiKey: 'AIzaSyC1tT5znPLhZYsSivmucOTsMQFTlmx9nvA',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
        ],
        clientId:
          '615828513895-5huljl7ui2olhl6h8tnl5r2ccgjk194d.apps.googleusercontent.com',
        scope: 'profile',
      })
    })
  }, [])
  useEffect(() => {
    void loadGapi()
  }, [loadGapi])
  return (
    <AppContext.Provider value={appValue}>
      <main
        id='main'
        className='flex h-full w-full flex-col justify-center sm:flex-row'>
        <Player />
        <Search />
        <section
          ref={controllerRef}
          id='controller'
          className='button-col gap-2 p-4 text-base font-bold text-dark xs:text-xl sm:shrink-0 sm:grow-0 sm:basis-80'>
          <h3 className='invisible absolute'>리모콘</h3>
          <div className='button-row basis-1/5vh'>
            <div className='button-col'>
              <ControllerButton
                id='controller-speeddown'
                text='▲템 포'
                emoji=''
                className='bg-button1'
              />
              <ControllerButton
                id='controller-speedup'
                text='▼템 포'
                emoji=''
                className='bg-button1'
              />
            </div>
            <div className='button-col'>
              <ControllerButton
                id='controller-volumeup'
                text='▲뮤 직'
                emoji=''
                className='bg-button1'
              />
              <ControllerButton
                id='controller-volumedown'
                text='▼뮤 직'
                emoji=''
                className='bg-button1'
              />
            </div>
            <div className='button-col'>
              <ControllerButton
                id='controller-volumemute'
                text='🔇음소거'
                emoji=''
                className='bg-button1'
              />
              <ControllerButton
                id='controller-playpause'
                text=' 일시정지'
                emoji='⏸'
                className='emoji bg-button1'
              />
            </div>
          </div>
          <div className='button-row'>
            <ControllerButton
              id='controller-timebackward'
              text='◀️ 마디점프'
              emoji='◀️'
              className='emoji bg-button1'
            />
            <ControllerButton
              id='controller-timeforward'
              text='마디점프 '
              emoji='▶️▶️'
              className='emoji bg-button1'
            />
          </div>
          <div className='button-row'>
            <ControllerButton
              id='controller-applause'
              text='👏박 수'
              emoji=''
              className='basis-1/4 bg-button2'
            />
            <div className='button-col basis-1/2'>
              <ControllerButton
                id='controller-latest'
                text='🌟신곡연습'
                emoji=''
                className='basis-1/2 bg-button2'
              />
              <ControllerButton
                id='controller-search'
                text='🔍검 색'
                emoji=''
                className='basis-full bg-button2'
              />
            </div>
          </div>
          <ControllerButton
            id='controller-stop'
            text='취소'
            emoji=''
            className='basis-1/8vh bg-button3'
          />
        </section>{' '}
      </main>
    </AppContext.Provider>
  )
}
