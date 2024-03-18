import { NextResponse } from 'next/server'

const GET = () => {
  return NextResponse.json({ hi: 'hello' })
}
export { GET }
