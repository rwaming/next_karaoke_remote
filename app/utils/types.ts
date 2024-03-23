import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
} from 'react'
import { type YouTubeEvent } from 'react-youtube'

export interface AppContextValue {
  videoEvent: YouTubeEvent | null
  setVideoEvent: Dispatch<SetStateAction<YouTubeEvent | null>>
  videoID: string | null
  setVideoID: Dispatch<SetStateAction<string | null>>
  videoTitle: string
  setVideoTitle: Dispatch<SetStateAction<string>>
  videoDate: string
  setVideoDate: Dispatch<SetStateAction<string>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  playerRef: MutableRefObject<HTMLDivElement | null> | null
  controllerRef: MutableRefObject<HTMLDivElement | null> | null
  searchRef: MutableRefObject<HTMLDivElement | null> | null
  searchValueRef: MutableRefObject<HTMLInputElement | null> | null
  searchModalRef: MutableRefObject<HTMLDivElement | null> | null
}

export interface ControllerProps {
  id: string
  text: string
}

export type VideoInfo =
  | {
      id: string
      title: string
      artist: string
      number: string
      date: string
    }
  | number

export type RefAudios = Array<MutableRefObject<HTMLAudioElement | null>>

export type SetControllParams = Pick<ControllerProps, 'id'> &
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
