import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
} from 'react'

/* Utilities */
export type Div = HTMLDivElement
export type Input = HTMLInputElement
export type Button = HTMLButtonElement
export type Audio = HTMLAudioElement
export type SetState<T> = Dispatch<SetStateAction<T>>
export type UseRef<T> = MutableRefObject<T | null>
export type UseRefArray<T> = Array<MutableRefObject<T | null>>

/* Exclusive */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type VideoInfo = {
  id: string
  title: string
  artist: string
  number: string
  date: string
}
export type VideoInfos = Array<{
  id: string
  title: string
  artist: string
  number: string
  date: string
}>
export type SearchInfo = Array<
  | {
      id: string
      title: string
      artist: string
      number: string
      date: string
    }
  | number
>
