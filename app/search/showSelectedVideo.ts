import {
  type Div,
  type UseRef,
  type Button,
  type VideoInfos,
  type SetState,
} from '@/utils/Types'
import { type MouseEvent } from 'react'
import searchOpenClose from './searchOpenClose'

export default function showSelectedVideo(
  event: MouseEvent,
  {
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
    videoInfos,
    setVideoID,
    setVideoTitle,
    setVideoArtist,
    setVideoNumber,
    setVideoDate,
  }: {
    playerRef: UseRef<Div>
    controllerRef: UseRef<Div>
    searchRef: UseRef<Div>
    searchModalRef: UseRef<Button>
    videoInfos: VideoInfos
    setVideoID: SetState<string>
    setVideoTitle: SetState<string>
    setVideoArtist: SetState<string>
    setVideoNumber: SetState<string>
    setVideoDate: SetState<string>
  },
): void {
  event.preventDefault()
  searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)

  const getIndexFromID =
    event.currentTarget.parentElement?.id.match(/\d*$/) ?? '-1'

  if (Array.isArray(getIndexFromID)) {
    const index = parseInt(getIndexFromID[0], 10)
    const videoInfo = videoInfos[index]
    const { id, title, artist, number, date } = videoInfo

    setVideoID(id)
    setVideoTitle(title)
    setVideoArtist(artist)
    setVideoNumber(number)
    setVideoDate(date)
  }
}
