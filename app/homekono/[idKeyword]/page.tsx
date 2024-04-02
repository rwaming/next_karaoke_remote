'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import YouTube, { type YouTubeEvent } from 'react-youtube'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '@/utils/HomekonoProvider'
import { type IFrame } from '@/utils/Types'

export default function Video({
  params,
}: {
  params: { idKeyword: string }
}): JSX.Element {
  const idKeyword = decodeURIComponent(params.idKeyword)
  const { setPlayerEvent, setVideoID } = useContext(HomekonoActionContext)
  const { playerLoadingRef, playerReadyRef } = useContext(HomekonoRefContext)

  const [isNotID, setIsNotID] = useState(false)

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
      console.log(state)
      if (typeof state === 'number') {
        const playerIframe: IFrame = event.target.getIframe()
        const playerYT = playerIframe.parentElement
        const playerReady = playerReadyRef.current
        if (state === -1) {
          playerYT?.classList.remove('sm:mini-size')
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

  const checkID = useCallback(async () => {
    const fetchSearchResult = await fetch(`/homekono/api?id=${idKeyword}`)
    const searchResult = await fetchSearchResult.json()

    const checkQuota =
      searchResult.error?.message.includes('quota') === true ?? false
    if (checkQuota) {
      setVideoID(
        'Error: 지금은 서비스를 이용할 수 없습니다. 잠시 후에 다시 시도해주십시오.',
      )
    } else {
      const listLength = searchResult.pageInfo.resultsPerPage
      if (listLength === 0) {
        setIsNotID(true)
      } else {
        setVideoID(idKeyword)
      }
    }
  }, [idKeyword, setVideoID])

  useEffect(() => {
    void checkID()
  })
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
      onReady={readyToUsePlayer}
      onPlay={playVideoHighQuility}
      onEnd={EndNoMoreVideos}
      onStateChange={stateSize}
    />
  )
}
