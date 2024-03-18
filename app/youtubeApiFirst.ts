import { gapi } from 'gapi-script'

export default async function youtubeApiFirst(
  setVideoID: React.Dispatch<React.SetStateAction<string>>,
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>,
  setVideoDate: React.Dispatch<React.SetStateAction<string>>,
) {
  console.log('start to load')
  // It should be used in really needed!!
  // It resets when 4pm in Korea.
  gapi.load('client', () => {
    gapi.client
      .init({
        apiKey: 'AIzaSyB1IOFOJ0D_e2-16KS4Tlol7mAiN2x9Fl4',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
        ],
        clientId:
          '73717891696-055at71c0fqi44m975h68s1ktgiqrqob.apps.googleusercontent.com',
        scope: 'profile',
      })
      .then(() => {})
      .then(() => {
        //@ts-ignore
        return gapi.client.youtube.search
          .list({
            part: 'snippet',
            channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
            order: 'date',
          })
          .then((response: any) => {
            const latestVideoInfo = response.result.items[0]
            const latestVideoID = latestVideoInfo.id.videoId
            const latestVideoTitle = latestVideoInfo.snippet.description
            const latestVideoDate = latestVideoInfo.snippet.publishedAt
            setVideoID(latestVideoID)
            setVideoTitle(latestVideoTitle)
            setVideoDate(latestVideoDate)
          })
      })
  })
  //*/
}
