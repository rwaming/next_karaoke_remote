import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import { type IFrame } from '../utils/Types'
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

  const useThisPlayer = useCallback(
    (event: YouTubeEvent) => {
      setVideoEvent(event)
    },
    [setVideoEvent],
  )
  const noMoreVideos = useCallback((event: YouTubeEvent) => {
    const playerIframe: IFrame = event.target.getIframe()
    const playerYT = playerIframe.parentElement
    const playerState = event.data
    if (playerYT !== null) {
      console.log(playerState)
      if (
        playerState === 0 ||
        playerState === 1 ||
        playerState === 2 ||
        playerState === 5
      ) {
        playerYT.classList.remove('mini-size')
        playerYT.classList.add('full-size')
        event.target.setPlaybackQuality('highres')
      } else {
        playerYT.classList.remove('full-size')
        playerYT.classList.add('mini-size')
      }
      if (playerState === 0) {
        event.target.stopVideo()
      }
    }
  }, [])

  return (
    <section
      ref={playerRef}
      id='player'
      className='player relative flex flex-shrink basis-16-9vh flex-col sm:flex-1 sm:items-end sm:justify-center'>
      <h2 className='invisible absolute'>노래 영상</h2>

      {videoID !== '' && !videoID.includes('Error') && (
        <p
          id='player-loading'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          Loading...
        </p>
      )}
      {videoID.includes('Error') && (
        <p
          id='player-loading'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {videoID}
        </p>
      )}
      <div id='player-content' className='relative h-16-9vh w-full'>
        {videoID !== '' && !videoID.includes('Error') && (
          <YouTube
            className='player-content__youtube'
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
            onStateChange={noMoreVideos}
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
