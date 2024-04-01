import { useCallback, useContext, useRef } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import { type Div, type IFrame } from '../../utils/Types'
import {
  AppActionContext,
  AppRefContext,
  AppValueContext,
} from '../../utils/AppProvider'

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
      const playerLoading = playerLoadingRef.current
      playerLoading?.classList.add('hidden')
      const playerIframe: IFrame = event.target.getIframe()
      const playerYT = playerIframe.parentElement
      playerYT?.classList.add('mini-size')
      event.target.playVideo()
    },
    [setVideoEvent],
  )
  const stateSize = useCallback((event: YouTubeEvent) => {
    const state = event.data
    if (typeof state === 'number') {
      const playerIframe: IFrame = event.target.getIframe()
      const playerYT = playerIframe.parentElement
      const playerReady = playerReadyRef.current
      if (state === -1) {
        playerYT?.classList.add('sm:mini-size')
      } else {
        playerYT?.classList.remove('sm:mini-size')
      }
      if (state === 3) {
        playerYT?.classList.add('mini-size')
        playerYT?.classList.remove('full-size')
        playerReady?.classList.remove('hidden')
      } else {
        playerYT?.classList.add('full-size')
        playerYT?.classList.remove('mini-size')
        playerReady?.classList.add('hidden')
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
      className='player relative z-10 flex max-h-1/3dvh flex-shrink flex-col sm:m-4 sm:mb-11 sm:mr-0 sm:mt-16 sm:max-h-none sm:flex-1'>
      <h2 className='hidden'>노래 영상</h2>

      {videoID !== '' && !videoID.includes('Error') && (
        <p
          ref={playerLoadingRef}
          id='player-loading'
          className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
          화면을 만들고 있어요.
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
        className='player-content relative flex h-16-9dvh w-full justify-center overflow-hidden bg-dark bg-opacity-50 sm:h-full sm:flex-col sm:items-center sm:rounded-lg'>
        {videoID !== '' && !videoID.includes('Error') && (
          <YouTube
            className='player-content__youtube'
            videoId={videoID}
            opts={{
              playerVars: {
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
