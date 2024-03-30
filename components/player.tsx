import { useCallback, useContext, useRef } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import { type Div, type IFrame } from '../utils/Types'
import {
  AppActionContext,
  AppRefContext,
  AppValueContext,
} from '../utils/AppProvider'

export default function Player(): JSX.Element {
  const { videoID, videoTitle, videoArtist, videoNumber, videoDate } =
    useContext(AppValueContext)
  const { setVideoEvent } = useContext(AppActionContext)
  const { playerRef } = useContext(AppRefContext)

  const playerLoadingRef = useRef<Div>(null)
  const playerReadyRef = useRef<Div>(null)

  const readyToUsePlayer = useCallback(
    (event: YouTubeEvent) => {
      // get youtube event
      setVideoEvent(event)
      // ready size: full
      const playerLoading = playerLoadingRef.current
      const playerReady = playerReadyRef.current
      playerLoading?.classList.add('hidden')
      playerReady?.classList.remove('hidden')
      // autoplay in moment player made
      event.target.stopVideo()
      event.target.playVideo()
    },
    [setVideoEvent],
  )
  const stateSize = useCallback((event: YouTubeEvent) => {
    const state = event.data
    console.log(state)
    if (typeof state === 'number') {
      const playerIframe: IFrame = event.target.getIframe()
      const playerYT = playerIframe.parentElement
      const playerReady = playerReadyRef.current
      if (state === -1 || state === 3) {
        playerReady?.classList.remove('hidden')
        playerYT?.classList.remove('full-size')
        playerYT?.classList.add('mini-size')
      } else {
        playerReady?.classList.add('hidden')
        playerYT?.classList.remove('mini-size')
        playerYT?.classList.add('full-size')
      }
    }
  }, [])
  const playVideoHighQuility = useCallback((event: YouTubeEvent) => {
    event.target.setPlaybackQuality('highres')
  }, [])
  const EndNoMoreVideos = useCallback((event: YouTubeEvent) => {
    event.target.stopVideo()
  }, [])

  return (
    <section
      ref={playerRef}
      id='player'
      className='player relative flex max-h-1/3dvh flex-shrink flex-col sm:max-h-none sm:flex-1 sm:items-end sm:justify-center'>
      <h2 className='invisible absolute -z-10'>노래 영상</h2>

      {videoID !== '' && !videoID.includes('Error') && (
        <p
          ref={playerLoadingRef}
          id='player-loading'
          className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
          플레이어를 만들고 있어요.
        </p>
      )}
      <p
        ref={playerReadyRef}
        id='player-ready'
        className='absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2'>
        노래를 불러오고 있어요.
      </p>
      {videoID.includes('Error') && (
        <p
          id='player-loading'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {videoID}
        </p>
      )}
      <div
        id='player-content'
        className='player-content relative h-16-9dvh w-full bg-dark bg-opacity-50'>
        {videoID !== '' && !videoID.includes('Error') && (
          <YouTube
            className='player-content__youtube'
            videoId={videoID}
            opts={{
              playerVars: {
                // autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                iv_load_policy: 3,
                rel: 0,
              },
            }}
            onReady={readyToUsePlayer}
            onPlay={playVideoHighQuility}
            onEnd={EndNoMoreVideos}
            onStateChange={stateSize}
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
  )
}
