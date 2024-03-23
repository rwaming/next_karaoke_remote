import { type SetState } from '@/utils/Types'
import { gapi } from 'gapi-script'

export default async function showLatestVideo(
  setVideoID: SetState<string | null>,
  setVideoTitle: SetState<string>,
  setVideoDate: SetState<string>,
  setIsPlaying: SetState<boolean>,
): Promise<void> {
  const latestVideoList = await gapi.client.youtube.search.list({
    part: 'snippet',
    channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
    order: 'date',
    maxResults: 1,
  })
  const latestVideoInfo = latestVideoList.result.items[0]
  const latestVideoID: string = latestVideoInfo.id.videoId
  const latestVideoTitle: string = latestVideoInfo.snippet.title
  const latestVideoDate: string = latestVideoInfo.snippet.publishedAt
  setVideoID(latestVideoID)
  setVideoTitle(latestVideoTitle)
  setVideoDate(latestVideoDate)
  setIsPlaying(false)
}
