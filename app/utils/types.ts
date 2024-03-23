import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
} from 'react'
import { type YouTubeEvent } from 'react-youtube'

/* Utilities */
export type Div = HTMLDivElement
export type Input = HTMLInputElement
export type Button = HTMLButtonElement
export type Audio = HTMLAudioElement
export type SetState<T> = Dispatch<SetStateAction<T>>
export type Ref<T> = MutableRefObject<T | null> | null
export type RefArray<T> = Array<MutableRefObject<T | null>>

/* Exclusive */
export interface AppContextType {
  videoEvent: YouTubeEvent | null
  setVideoEvent: SetState<YouTubeEvent | null>
  videoID: string | null
  setVideoID: SetState<string | null>
  videoTitle: string
  setVideoTitle: SetState<string>
  videoDate: string
  setVideoDate: SetState<string>
  isPlaying: boolean
  setIsPlaying: SetState<boolean>
  playerRef: Ref<Div>
  controllerRef: Ref<Div>
  searchRef: Ref<Div>
  searchValueRef: Ref<Input>
  searchModalRef: Ref<Div>
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
export interface ControllerProps {
  id: string
  text: string
}
export type SetControllParams = Pick<ControllerProps, 'id'> &
  Pick<
    AppContextType,
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
  > & { applauseRefs: RefArray<Audio> }

export interface SearchContextType {
  searchInfos: VideoInfo[] | null
  setSearchInfos: SetState<VideoInfo[] | null>
  videoAllLength: number | null
  setVideoAllLength: SetState<number | null>
}
