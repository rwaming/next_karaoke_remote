import { gapi } from 'gapi-script'

export default async function showLatestVideo(
  setVideoID: React.Dispatch<React.SetStateAction<string | null>>,
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>,
  setVideoDate: React.Dispatch<React.SetStateAction<string>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
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
