import {
  type IFrame,
  type SetState,
  type Div,
  type UseRef,
} from '@/utils/Types'
import { exceedQuotaMessage } from '@/utils/utilities'
import { type YouTubeEvent } from 'react-youtube'

function readyToUsePlayer(
  event: YouTubeEvent,
  setPlayerEvent: SetState<YouTubeEvent | null>,
  playerLoadingRef: UseRef<Div>,
): void {
  // get youtube event
  setPlayerEvent(event)
  const playerLoading = playerLoadingRef.current
  playerLoading?.classList.add('hidden')
  const playerIframe: IFrame = event.target.getIframe()
  const playerYT = playerIframe.parentElement
  playerYT?.classList.add('mini-size')
  event.target.playVideo()
}

function playVideoHighQuility(event: YouTubeEvent): void {
  event.target.setPlaybackQuality('highres')
}

function stateSize(event: YouTubeEvent, playerReadyRef: UseRef<Div>): void {
  const state = event.data
  console.log(state)
  if (typeof state === 'number') {
    const playerIframe: IFrame = event.target.getIframe()
    const playerYT = playerIframe.parentElement
    const playerReady = playerReadyRef.current
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
}

function EndNoMoreVideos(event: YouTubeEvent): void {
  event.target.stopVideo()
}

async function checkID(
  idKeyword: string,
  setVideoID: SetState<string>,
  setIsNotID: SetState<boolean>,
): Promise<void> {
  const fetchSearchResult = await fetch(`/homekono/api?id=${idKeyword}`)
  const searchResult = await fetchSearchResult.json()

  const checkQuota =
    searchResult.error?.message.includes('quota') === true ?? false
  if (checkQuota) {
    setVideoID(exceedQuotaMessage)
  } else {
    const listLength = searchResult.pageInfo.resultsPerPage
    if (listLength === 0) {
      setIsNotID(true)
    } else {
      setVideoID(idKeyword)
    }
  }
}

export {
  readyToUsePlayer,
  stateSize,
  playVideoHighQuility,
  EndNoMoreVideos,
  checkID,
}
