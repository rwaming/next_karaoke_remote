export default async function gapiInit(): Promise<void> {
  await import('gapi-script')
  await new Promise<void>((resolve, reject) => {
    gapi.load('client', () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
      gapi.client
        .init({
          apiKey,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
          ],
          clientId: `${clientId}.apps.googleusercontent.com`,
          scope: 'profile',
        })
        .then(resolve)
        .catch(reject)
    })
  })
}
