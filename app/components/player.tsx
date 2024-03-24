import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import Link from 'next/link'
import { type IFrame } from '@/utils/Types'
import AppContext from '../utils/AppContext'

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
    playerIframe.style.width = '100%'
    playerIframe.style.height = '100%'
  }, [])

  return (
    <section
      ref={playerRef}
      id="player"
      className="relative flex flex-shrink basis-16-9vh flex-col md:flex-1 md:items-end md:justify-center">
      <h2 className="invisible absolute">노래 영상</h2>

      <div id="player-content" className="relative h-16-9vh w-full">
        {videoID !== '' && (
          <YouTube
            className="player-yt"
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
            id="information"
            className="absolute bottom-0 left-0 z-20 w-full bg-dark bg-opacity-50 text-xs opacity-0">
            <figcaption>영상 정보</figcaption>
            <p>
              <Link
                href={`https://www.youtube.com/watch?v=${videoID}`}
                target="_blank">{`https://www.youtube.com/watch?v=${videoID}`}</Link>
            </p>
            <p className="inline">{videoTitle} / </p>
            <p className="inline">{videoArtist} / </p>
            <p className="inline">{videoNumber}</p>
            <p>{videoDate}</p>
          </figure>
        )}
      </div>
    </section>
  )
}
