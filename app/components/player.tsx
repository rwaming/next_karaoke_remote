import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from '../utils/AppContext'

export default function Player(): JSX.Element {
  const {
    setVideoEvent,
    videoID,
    videoTitle,
    videoDate,
    setIsPlaying,
    playerRef,
  } = useContext(AppContext)

  const useThisVideo = useCallback(
    (event: YouTubeEvent) => {
      setVideoEvent(event)
      setIsPlaying(true)
    },
    [setIsPlaying, setVideoEvent],
  )
  return (
    <div
      ref={playerRef}
      id="player"
      className="flex-shrink basis-16-9vh flex flex-col md:flex-1 md:justify-center md:items-end"
    >
      <figure id="player-content" className="h-16-9vh relative w-full">
        <div
          id="player-modal"
          className="w-full h-full absolute top-0 right-0"
        />
        <figcaption
          id="information"
          className="hidden absolute top-0 right-0 w-full h-1/5 bg-dark text-xs"
        >
          <p>{videoID !== '' && videoID}</p>
          <p>{videoID !== '' && videoTitle}</p>
          <p>{videoID !== '' && videoDate}</p>
        </figcaption>

        {videoID !== '' && (
          <YouTube
            className="player-yt"
            videoId={videoID}
            opts={{
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                controls: 0,
                fs: 1,
              },
            }}
            onReady={useThisVideo}
          />
        )}
      </figure>
    </div>
  )
}
