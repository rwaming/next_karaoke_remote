import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
} from 'react'

/* Utilities */
export type DivType = HTMLDivElement
export type InputType = HTMLInputElement
export type ButtonType = HTMLButtonElement
export type AudioType = HTMLAudioElement
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type RefType<T> = MutableRefObject<T | null> | null
export type RefArrayType<T> = Array<MutableRefObject<T | null>>

/* Exclusive */
export type VideoInfo =
  | {
      id: string
      title: string
      artist: string
      number: string
      date: string
    }
  | number
