import { type NextRequest, NextResponse } from 'next/server'

async function GET(request: NextRequest): Promise<NextResponse<unknown>> {
  const param = request.nextUrl.searchParams
  const paramKey = [
    'part',
    'channelId',
    'order',
    'maxResults',
    'type',
    'videoEmbeddable',
    'q',
  ]

  const query = paramKey
    .map((key) => {
      if (param.get(key) !== null) {
        return `&${key}=${param.get(key)}`
      }
      return ''
    })
    .join('')

  const youtube = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}${query}`,
    { headers: { Referer: 'http://localhost:3000' } },
  )
  const result = await youtube.json()
  return NextResponse.json(result)
}

// eslint-disable-next-line import/prefer-default-export
export { GET }
