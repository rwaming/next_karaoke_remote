import { gapi } from 'gapi-script'

export default async function youtubeApiFirst(
  setVideoID: React.Dispatch<React.SetStateAction<string | null>>,
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>,
  setVideoDate: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
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
      .then(() => {
        // @ts-expect-error
        return gapi.client.youtube.search
          .list({
            part: 'snippet',
            channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
            order: 'date',
          })
          .then((response: unknown) => {
            const latestVideoInfo = response.result.items[0]
            const latestVideoID = latestVideoInfo.id.videoId
            const latestVideoTitle = latestVideoInfo.snippet.title
            const latestVideoDate = latestVideoInfo.snippet.publishedAt
            setVideoID(latestVideoID)
            setVideoTitle(latestVideoTitle)
            setVideoDate(latestVideoDate)
          })
      })
  })

  // gapi.load('client', () => {
  //   gapi.client
  //     .init({
  //       apiKey: 'AIzaSyC1tT5znPLhZYsSivmucOTsMQFTlmx9nvA',
  //       discoveryDocs: [
  //         'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
  //       ],
  //       clientId:
  //         '615828513895-5huljl7ui2olhl6h8tnl5r2ccgjk194d.apps.googleusercontent.com',
  //       scope: 'profile',
  //     })
  //     .then(() => {
  //       //@ts-ignore
  //       return gapi.client.youtube.search
  //         .list({
  //           part: 'snippet',
  //           channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
  //           order: 'date',
  //         })
  //         .then((response: any) => {
  //           const latestVideoInfo = response.result.items[0]
  //           const latestVideoID = latestVideoInfo.id.videoId
  //           const latestVideoTitle = latestVideoInfo.snippet.title
  //           const latestVideoDate = latestVideoInfo.snippet.publishedAt
  //           setVideoID(latestVideoID)
  //           setVideoTitle(latestVideoTitle)
  //           setVideoDate(latestVideoDate)
  //         })
  //     })
  // })
}
