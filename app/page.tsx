import { Suspense } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  event.target.pauseVideo()
}

const opts: YouTubeProps['opts'] = {
  height: '560',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
}

export default function Home() {
  return (
    <div className="wrap">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="media">
          <YouTube
            videoId="zZ3lnstCZAY"
            opts={opts}
            onReady={onPlayerReady}
            onEnd={(e) => {
              e.target.stopVideo(0)
            }}
          />
        </div>
        <div className="control">
          <button type="button" className="pause bg-orange-300">
            ⏯️
          </button>
        </div>
      </Suspense>
    </div>
  )
}
