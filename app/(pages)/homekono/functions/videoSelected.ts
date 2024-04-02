import { type MouseEvent } from 'react'
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import {
  type Div,
  type UseRef,
  type Button,
  type VideoInfos,
  type SetState,
} from '@/utils/Types'
import searchOpenClose from './searchOpenClose'

export default function videoSelected(
  event: MouseEvent,
  {
    controllerRef,
    playerRef,
    searchModalRef,
    searchRef,
    setPlayerState,
    videoInfos,
    router,
  }: {
    playerRef: UseRef<Div>
    controllerRef: UseRef<Div>
    searchRef: UseRef<Div>
    searchModalRef: UseRef<Button>
    videoInfos: VideoInfos
    setPlayerState: SetState<string>
    router: AppRouterInstance
  },
): void {
  event.preventDefault()
  searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)

  const getIndexFromID =
    event.currentTarget.parentElement?.id.match(/\d*$/) ?? '-1'

  if (Array.isArray(getIndexFromID)) {
    const index = parseInt(getIndexFromID[0], 10)
    const { id } = videoInfos[index]

    setPlayerState(id)
    router.push(`/homekono/${id}`)
  }
}
