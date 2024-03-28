import { type SetState } from '../utils/Types'

export default async function showLatestVideo(
  setVideoID: SetState<string>,
  setVideoTitle: SetState<string>,
  setVideoArtist: SetState<string>,
  setVideoNumber: SetState<string>,
  setVideoDate: SetState<string>,
): Promise<void> {
  await import('gapi-script')
  const latestVideoList = await gapi.client.youtube.search.list({
    part: 'snippet',
    channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
    order: 'date',
    maxResults: 1,
  })
  const videos = latestVideoList.result.items ?? []
  const video = videos[0]
  const videoID: string = video.id?.videoId ?? ''
  const videoDate: string = video.snippet?.publishedAt ?? ''
  const videoTitle: string = video.snippet?.title ?? ''
  // 사건의 지평선 - 윤하(Event horizon - YOUNHA) (KY.28707) / KY Karaoke

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
  let number = divided[1].trim().split(')')[0]
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
