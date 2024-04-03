import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { type YouTubeEvent } from 'react-youtube'

export default function playStop(
  playerEvent: null | YouTubeEvent,
  router: AppRouterInstance,
): void {
  if (playerEvent != null) {
    const state = playerEvent.target.getPlayerState()
    if (state === 5 || state === -1) {
      router.push('/homekono')
    } else {
      playerEvent.target.stopVideo()
    }
  }
}
