'use client'

import { useCallback, useEffect } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import AppProvider, {
  useAppAction,
  useAppRef,
  useAppValue,
} from '../utils/AppProvider'
import gapiInit from '../utils/gapiInit'
import ControllerButton from '../components/controllerButton'
import { type IFrame } from '../utils/Types'
import Search from '../components/search'

export default function Main(): JSX.Element {
  const { videoID, videoTitle, videoArtist, videoNumber, videoDate } =
    useAppValue()
  const { setVideoEvent } = useAppAction()
  const { playerRef, controllerRef, searchModalRef } = useAppRef()
  const useThisPlayer = useCallback(
    (event: YouTubeEvent) => {
      setVideoEvent(event)
    },
    [setVideoEvent],
  )
  const makePlayerFullSize = useCallback((event: YouTubeEvent) => {
    const playerIframe: IFrame = event.target.getIframe()
    const playerYT = playerIframe.parentElement
    if (playerYT !== null) {
      playerYT.style.maxWidth = '100%'
      playerYT.style.maxHeight = '100%'
      playerYT.style.width = '100%'
      playerYT.style.height = '100%'
    }
  }, [])

  useEffect(() => {
    void gapiInit()
  }, [])

  useEffect(() => {
    console.log(searchModalRef)
    console.log(playerRef)
    console.log(controllerRef)
  }, [controllerRef, playerRef, searchModalRef])
  return (
    <AppProvider>
      <main
        id='main'
        className='flex h-full w-full flex-col justify-center sm:flex-row'>
        <section
          ref={playerRef}
          id='player'
          className='player relative flex flex-shrink basis-16-9vh flex-col sm:flex-1 sm:items-end sm:justify-center'>
          <h2 className='invisible absolute'>노래 영상</h2>

          <div id='player-content' className='relative h-16-9vh w-full'>
            {videoID !== '' && (
              <YouTube
                className='player-yt'
                videoId={videoID}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    rel: 0,
                  },
                }}
                onReady={useThisPlayer}
                onPlay={makePlayerFullSize}
              />
            )}

            {videoID !== '' && (
              <figure
                id='information'
                className='absolute bottom-0 left-0 hidden w-full bg-dark bg-opacity-50 text-xs opacity-0'>
                <figcaption>영상 정보</figcaption>
                <p>
                  <Link
                    href={`https://www.youtube.com/watch?v=${videoID}`}
                    target='_blank'>{`https://www.youtube.com/watch?v=${videoID}`}</Link>
                </p>
                <p className='inline'>{videoTitle} / </p>
                <p className='inline'>{videoArtist} / </p>
                <p className='inline'>{videoNumber}</p>
                <p>{videoDate}</p>
              </figure>
            )}
          </div>
        </section>
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
