import { gapi } from 'gapi-script'

export default async function youtubeAPI(): Promise<void> {
  await new Promise<void>((resolve, reject) => {
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
        .then(resolve)
        .catch(reject)
    })
  })
}

//     .init({
//       apiKey: 'AIzaSyC1tT5znPLhZYsSivmucOTsMQFTlmx9nvA',
//       discoveryDocs: [
//         'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
//       ],
//       clientId:
//         '615828513895-5huljl7ui2olhl6h8tnl5r2ccgjk194d.apps.googleusercontent.com',
//       scope: 'profile',
//     })

// .init({
//   apiKey: 'AIzaSyB1IOFOJ0D_e2-16KS4Tlol7mAiN2x9Fl4',
//   discoveryDocs: [
//     'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
//   ],
//   clientId:
//     '73717891696-055at71c0fqi44m975h68s1ktgiqrqob.apps.googleusercontent.com',
//   scope: 'profile',
// })
