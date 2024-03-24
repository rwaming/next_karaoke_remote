import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from '../utils/AppContext'

export default function Player(): JSX.Element {
  const { setVideoEvent, videoID, videoTitle, videoDate, playerRef } =
    useContext(AppContext)

  const useThisVideo = useCallback(
    (event: YouTubeEvent) => {
      setVideoEvent(event)
    },
    [setVideoEvent],
  )
  return (
    <section
      ref={playerRef}
      id="player"
      className="flex flex-shrink basis-16-9vh flex-col md:flex-1 md:items-end md:justify-center">
      <div id="player-content" className="relative h-16-9vh w-full">
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
        <button
          type="button"
          id="player-modal"
          className="absolute right-0 top-0 h-full w-full cursor-default text-transparent">
          Pause
        </button>
      </div>
    </section>
  )
}
