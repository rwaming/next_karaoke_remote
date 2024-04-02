import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { type YouTubeEvent } from 'react-youtube'

export default function playStop(
  videoEvent: null | YouTubeEvent,
  router: AppRouterInstance,
): void {
  if (videoEvent != null) {
    const state = videoEvent.target.getPlayerState()
    if (state === 5 || state === -1) {
      router.push('/homekono')
    } else {
      videoEvent.target.stopVideo()
    }
  }
}
