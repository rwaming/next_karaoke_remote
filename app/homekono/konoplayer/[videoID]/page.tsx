'use client'

import { useCallback, useContext } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import { type IFrame } from '@/utils/Types'

export default function Video({
  params,
}: {
  params: { videoID: string }
}): JSX.Element {
  const { videoID } = params
  const { setPlayerEvent } = useContext(HomekonoActionContext)
  const { playerLoadingRef, playerReadyRef } = useContext(HomekonoRefContext)

  const readyToUsePlayer = useCallback(
    (event: YouTubeEvent) => {
      // get youtube event
      setPlayerEvent(event)
      const playerLoading = playerLoadingRef.current
      playerLoading?.classList.add('hidden')
      const playerIframe: IFrame = event.target.getIframe()
      const playerYT = playerIframe.parentElement
      playerYT?.classList.add('mini-size')
      event.target.playVideo()
    },
    [playerLoadingRef, setPlayerEvent],
  )
  const stateSize = useCallback(
    (event: YouTubeEvent) => {
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
    },
    [playerReadyRef],
  )
  const playVideoHighQuility = useCallback((event: YouTubeEvent) => {
    event.target.setPlaybackQuality('highres')
  }, [])
  const EndNoMoreVideos = useCallback((event: YouTubeEvent) => {
    event.target.stopVideo()
  }, [])
  return (
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
  )
}
