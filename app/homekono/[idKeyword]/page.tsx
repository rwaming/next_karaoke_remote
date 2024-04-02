'use client'

import { useContext, useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import {
  EndNoMoreVideos,
  checkID,
  playVideoHighQuility,
  readyToUsePlayer,
  stateSize,
} from './functions/playerFunctions'

export default function Video({
  params,
}: {
  params: { idKeyword: string }
}): JSX.Element {
  const idKeyword = decodeURIComponent(params.idKeyword)
  const { setPlayerEvent, setVideoID } = useContext(HomekonoActionContext)
  const { playerLoadingRef, playerReadyRef } = useContext(HomekonoRefContext)

  const [isNotID, setIsNotID] = useState(false)

  useEffect(() => {
    void checkID(idKeyword, setVideoID, setIsNotID)
  }, [idKeyword, setVideoID])
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
