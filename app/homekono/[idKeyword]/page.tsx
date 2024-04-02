'use client'

import { useContext, useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import { useRouter } from 'next/navigation'
import {
  EndNoMoreVideos,
  playOrSearch,
  playVideoHighQuility,
  readyToUsePlayer,
  stateSize,
} from './functions/playerFunctions'

export default function Video({
  params,
}: {
  params: { idKeyword: string }
}): JSX.Element {
  const {
    setPlayerEvent,
    setVideoID,
    setVideoTitle,
    setVideoArtist,
    setVideoNumber,
    setVideoDate,
  } = useContext(HomekonoActionContext)
  const { playerLoadingRef, playerReadyRef } = useContext(HomekonoRefContext)

  const router = useRouter()
  const idKeyword = decodeURIComponent(params.idKeyword)
  const [isNotID, setIsNotID] = useState(false)

  useEffect(() => {
    void playOrSearch(
      idKeyword,
      isNotID,
      setIsNotID,
      setVideoID,
      setVideoTitle,
      setVideoArtist,
      setVideoNumber,
      setVideoDate,
      router,
    )
  }, [
    idKeyword,
    isNotID,
    router,
    setVideoArtist,
    setVideoDate,
    setVideoID,
    setVideoNumber,
    setVideoTitle,
  ])

  return isNotID ? (
    <div id='player-content__search'>
      <p className='font-light'>{`${idKeyword}`}를 검색하고 있어요.</p>
    </div>
  ) : (
    <YouTube
      className='player-content__youtube'
      videoId={idKeyword}
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
      onReady={(event) => {
        readyToUsePlayer(event, setPlayerEvent, playerLoadingRef)
      }}
      onPlay={playVideoHighQuility}
      onStateChange={(event) => {
        stateSize(event, playerReadyRef)
      }}
      onEnd={EndNoMoreVideos}
    />
  )
}
