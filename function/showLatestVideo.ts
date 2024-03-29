import { type SetState } from '../utils/Types'

export default async function showLatestVideo(
  setVideoID: SetState<string>,
  setVideoTitle: SetState<string>,
  setVideoArtist: SetState<string>,
  setVideoNumber: SetState<string>,
  setVideoDate: SetState<string>,
): Promise<void> {
  const param = {
    part: 'snippet',
    channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
    order: 'date',
    maxResults: 1,
    type: 'video',
    videoEmbeddable: 'true',
  }
  const fetchLatestVideoInfo = await fetch(
    `/api?part=${param.part}&channelId=${param.channelId}&order=${param.order}&maxResults=${param.maxResults}&type=${param.type}&videoEmbeddable=${param.videoEmbeddable}`,
  )
  const latestVideoInfo = await fetchLatestVideoInfo.json()

  const result =
    latestVideoInfo.error?.message.includes('quota') === true ?? false
  if (result) {
    setVideoID(
      'Error: 지금은 서비스를 이용할 수 없습니다. 이후에 다시 시도해주십시오.',
    )
  } else {
    const video = latestVideoInfo.items[0]
    const videoID: string = video.id.videoId
    const videoDate: string = video.snippet.publishedAt
    const videoTitle: string = video.snippet.title
    let divided

    if (videoTitle.includes('(KY.')) {
      divided = videoTitle.split('(KY.')
    } else if (videoTitle.includes('[KY')) {
      divided = videoTitle.split('[KY')
    } else {
      divided = videoTitle.split(')')
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
      title = videoTitle
    }

    setVideoID(videoID)
    setVideoTitle(title)
    setVideoArtist(artist)
    setVideoNumber(number)
    setVideoDate(videoDate)
  }
}
