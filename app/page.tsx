import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="wrap">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="media"></div>
        <div className="control">
          <button type="button" className="pause bg-orange-300">
            ⏯️
          </button>
        </div>
      </Suspense>
    </div>
  )
}
