import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import { type IFrame } from '../utils/Types'
import AppContext from '../utils/AppValueContext'

export default function Player(): JSX.Element {
  const {
    setVideoEvent,
    videoID,
    videoTitle,
    videoArtist,
    videoNumber,
    videoDate,
    playerRef,
  } = useContext(AppContext)

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

  return (
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
  )
}
