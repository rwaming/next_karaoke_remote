import {
  type IFrame,
  type SetState,
  type Div,
  type UseRef,
} from '@/utils/Types'
import { exceedQuotaMessage, kyID, qFilterKeyword } from '@/utils/utilities'
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { type YouTubeEvent } from 'react-youtube'

export function readyToUsePlayer(
  event: YouTubeEvent,
  setPlayerEvent: SetState<YouTubeEvent | null>,
  playerLoadingRef: UseRef<Div>,
): void {
  setPlayerEvent(event)
  const playerLoading = playerLoadingRef.current
  const playerIframe: IFrame = event.target.getIframe()
  const playerYT = playerIframe.parentElement
  playerYT?.classList.add('mini-size')
  event.target.playVideo()
  playerLoading?.classList.add('hidden')
}

export function playVideoHighQuility(event: YouTubeEvent): void {
  event.target.setPlaybackQuality('highres')
}

export function stateSize(
  event: YouTubeEvent,
  playerReadyRef: UseRef<Div>,
): void {
  const state = event.data
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

export function EndNoMoreVideos(event: YouTubeEvent): void {
  event.target.stopVideo()
}

export async function checkIdOrNot(
  idKeyword: string,
  setPlayerState: SetState<string>,
  setIsNotID: SetState<boolean>,
): Promise<void> {
  const fetchSearchResult = await fetch(`/homekono/api?id=${idKeyword}`)
  const searchResult = await fetchSearchResult.json()
  const checkQuota =
    searchResult.error?.message.includes('quota') === true ?? false
  if (checkQuota) {
    setPlayerState(exceedQuotaMessage)
  } else {
    const listLength = searchResult.pageInfo.resultsPerPage
    if (listLength === 1) {
      setPlayerState(idKeyword)
    } else {
      setIsNotID(true)
    }
  }
}

export async function searchKeywordVideo(
  idKeyword: string,
  setPlayerState: SetState<string>,
): Promise<string> {
  const param = {
    part: 'snippet',
    channelId: kyID,
    maxResults: 1,
    type: 'video',
    videoEmbeddable: 'true',
    q: `${idKeyword} ${qFilterKeyword}`,
  }
  const fetchKeywordVideoInfo = await fetch(
    `/homekono/api?part=${param.part}&channelId=${param.channelId}&maxResults=${param.maxResults}&type=${param.type}&videoEmbeddable=${param.videoEmbeddable}&q=${param.q}`,
  )
  const keywordVideoInfo = await fetchKeywordVideoInfo.json()

  const result =
    keywordVideoInfo.error?.message.includes('quota') === true ?? false
  if (result) {
    setPlayerState(exceedQuotaMessage)
    return ''
  }
  if (keywordVideoInfo.pageInfo.totalResults > 0) {
    const video = keywordVideoInfo.items[0]
    const id: string = video.id.videoId

    setPlayerState(id)
    return id
  }
  return ''
}

export async function playOrSearch(
  idKeyword: string,
  isNotID: boolean,
  setIsNotID: SetState<boolean>,
  setPlayerState: SetState<string>,
  router: AppRouterInstance,
): Promise<void> {
  await checkIdOrNot(idKeyword, setPlayerState, setIsNotID)
  if (isNotID) {
    const id = await searchKeywordVideo(idKeyword, setPlayerState)
    if (id !== '') {
      router.push(`/homekono/${id}`)
    } else {
      router.push('/homekono/novideo')
    }
  }
}
