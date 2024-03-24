import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import AppContext from '../utils/AppContext'

export default function Player(): JSX.Element {
  const { setVideoEvent, videoID, playerRef } = useContext(AppContext)

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
      className="relative flex flex-shrink basis-16-9vh flex-col md:flex-1 md:items-end md:justify-center">
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        YouTube Player
      </h2>
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
          Pause Video
        </button>
      </div>
    </section>
  )
}
