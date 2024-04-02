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
  playerLoading?.classList.add('hidden')
  const playerIframe: IFrame = event.target.getIframe()
  const playerYT = playerIframe.parentElement
  playerYT?.classList.add('mini-size')
  event.target.playVideo()
}

export function playVideoHighQuility(event: YouTubeEvent): void {
  event.target.setPlaybackQuality('highres')
}

export function stateSize(
  event: YouTubeEvent,
  playerReadyRef: UseRef<Div>,
): void {
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

export function EndNoMoreVideos(event: YouTubeEvent): void {
  event.target.stopVideo()
}

export async function checkID(
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
    if (listLength === 1) {
      setVideoID(idKeyword)
    } else {
      setIsNotID(true)
    }
  }
}

export async function searchKeywordVideo(
  idKeyword: string,
  setVideoID: SetState<string>,
  setVideoTitle: SetState<string>,
  setVideoArtist: SetState<string>,
  setVideoNumber: SetState<string>,
  setVideoDate: SetState<string>,
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
    setVideoID(exceedQuotaMessage)
    return ''
  }
  if (keywordVideoInfo.pageInfo.totalResults > 0) {
    const video = keywordVideoInfo.items[0]
    const id: string = video.id.videoId
    const date: string = video.snippet.publishedAt
    const wholeTitle: string = video.snippet.title

    let divided
    if (wholeTitle.includes('(KY.')) {
      divided = wholeTitle.split('(KY.')
    } else if (wholeTitle.includes('[KY')) {
      divided = wholeTitle.split('[KY')
    } else {
      divided = wholeTitle.split(')')
    }
    const titleArtist = divided[0].trim().split('-')
    let title = titleArtist[0].trim()
    let artist = titleArtist.slice(1).join('')
    let number = divided[1]?.trim().split(')')[0] ?? ''
    if (title === '') {
      title = 'x'
    }
    if (artist === '') {
      artist = 'x'
    }
    if (Number.isNaN(Number(number))) {
      number = 'x'
    }
    if (title === 'x' && artist === 'x' && number === 'x') {
      title = wholeTitle
    }

    setVideoID(id)
    setVideoTitle(title)
    setVideoArtist(artist)
    setVideoNumber(number)
    setVideoDate(date)
    return id
  }
  return ''
}

export async function playOrSearch(
  idKeyword: string,
  isNotID: boolean,
  setIsNotID: SetState<boolean>,
  setVideoID: SetState<string>,
  setVideoTitle: SetState<string>,
  setVideoArtist: SetState<string>,
  setVideoNumber: SetState<string>,
  setVideoDate: SetState<string>,
  router: AppRouterInstance,
): Promise<void> {
  await checkID(idKeyword, setVideoID, setIsNotID)
  if (isNotID) {
    const id = await searchKeywordVideo(
      idKeyword,
      setVideoID,
      setVideoTitle,
      setVideoArtist,
      setVideoNumber,
      setVideoDate,
    )
    if (id !== '') {
      router.push(`/homekono/${id}`)
    } else {
      router.push('/homekono/novideo')
    }
  }
}
