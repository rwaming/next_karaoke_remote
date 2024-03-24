import {
  type Div,
  type UseRef,
  type Button,
  type VideoInfos,
  type SetState,
} from '@/utils/Types'
import { type MouseEvent } from 'react'
import searchOpenClose from './searchOpenClose'

export default function changeVideo(
  event: MouseEvent,
  {
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
    videoInfos,
    setVideoID,
    setVideoTitle,
    setVideoDate,
  }: {
    playerRef: UseRef<Div>
    controllerRef: UseRef<Div>
    searchRef: UseRef<Div>
    searchModalRef: UseRef<Button>
    videoInfos: VideoInfos
    setVideoID: SetState<string>
    setVideoTitle: SetState<string>
    setVideoDate: SetState<string>
  },
): void {
  event.preventDefault()
  searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)

  const getIndex = event.currentTarget.parentElement?.id.match(/\d*$/) ?? '-1'
  if (Array.isArray(getIndex)) {
    const index = parseInt(getIndex[0], 10)
    const videoInfo = videoInfos[index]

    const { id, title, date } = videoInfo
    setVideoID(id)
    setVideoTitle(title)
    setVideoDate(date)
  }
}
