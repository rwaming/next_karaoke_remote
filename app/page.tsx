'use client'

import { useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import AppProvider, { useAppRef } from '../utils/AppProvider'

const Search = dynamic(
  async () => {
    const getSearch = await import('../components/search')
    return getSearch
  },
  { ssr: false },
)
const Player = dynamic(
  async () => {
    const getPlayer = await import('../components/player')
    return getPlayer
  },
  { ssr: false },
)
const ControllerButton = dynamic(
  async () => {
    const getControllerButton = await import('../components/controllerButton')
    return getControllerButton
  },
  { ssr: false },
)

export default function Main(): JSX.Element {
  const { controllerRef } = useAppRef()
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
    <AppProvider>
      <main
        id='main'
        className='flex h-full w-full flex-col justify-center sm:flex-row'>
        <Player />
        <Search />
        <section
          ref={controllerRef}
          id='controller'
          className='controller button-col gap-2 p-4 text-base font-bold text-dark xs:text-xl sm:shrink-0 sm:grow-0 sm:basis-80'>
          <h3 className='invisible absolute'>리모콘</h3>
          <div className='button-row basis-1/5vh'>
            <div className='button-col'>
              <ControllerButton
                id='controller-speedup'
                text='▲템 포'
                emoji=''
                className='bg-button1'
              />
              <ControllerButton
                id='controller-speeddown'
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
                text='일시정지'
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
        </section>
      </main>
    </AppProvider>
  )
}
