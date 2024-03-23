import {
  type RefAudios,
  type AppContextValue,
  type ControllerProps,
} from '@/utils/types'
import { type MouseEvent } from 'react'
import playPause from './playPause'
import searchBoxOpen from './searchBoxOpen'
import showLatestVideo from './showLatestVideo'
import stopVideo from './stopVideo'
import moveTime from './moveTime'
import setVolume from './setVolume'
import setSpeed from './setSpeed'
import applause from './applause'

type SetControllProps = ControllerProps &
  Pick<
    AppContextValue,
    | 'videoEvent'
    | 'setVideoID'
    | 'setVideoTitle'
    | 'setVideoDate'
    | 'isPlaying'
    | 'setIsPlaying'
    | 'playerRef'
    | 'controllerRef'
    | 'searchRef'
    | 'searchModalRef'
  > & { applauseRefs: RefAudios }

export default function setControll(
  event: MouseEvent<HTMLButtonElement>,
  {
    id,
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
    applauseRefs,
  }: SetControllProps,
): void {
  void (
    id.includes('latest') &&
    showLatestVideo(setVideoID, setVideoTitle, setVideoDate, setIsPlaying)
  )
  id.includes('search') &&
    searchBoxOpen(playerRef, controllerRef, searchRef, searchModalRef)
  id.includes('playpause') && playPause(videoEvent, isPlaying, setIsPlaying)
  id.includes('stop') && stopVideo(videoEvent, setIsPlaying)
  id.includes('time') && moveTime(event, videoEvent)
  id.includes('volume') && setVolume(event, videoEvent)
  id.includes('speed') && setSpeed(event, videoEvent)
  id.includes('applause') && applause(applauseRefs)
}
