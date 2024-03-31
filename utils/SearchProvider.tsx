import { type ReactNode, createContext, useMemo, useState, useRef } from 'react'
import {
  type VideoInfos,
  type SetState,
  type UseRef,
  type Input,
  type Button,
} from './Types'

const SearchValueContext = createContext<{
  videoInfos: VideoInfos
  videoAllLength: number
  searchListNote: string
}>({
  videoInfos: [],
  videoAllLength: -1,
  searchListNote: '',
})

const SearchActionContext = createContext<{
  setVideoInfos: SetState<VideoInfos>
  setVideoAllLength: SetState<number>
}>({
  setVideoInfos: () => {},
  setVideoAllLength: () => {},
})

const SearchRefContext = createContext<{
  searchValueRef: UseRef<Input>
  searchModalRef: UseRef<Button>
}>({
  searchValueRef: { current: null },
  searchModalRef: { current: null },
})

export default function SearchProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [videoInfos, setVideoInfos] = useState<VideoInfos>([])
  const [videoAllLength, setVideoAllLength] = useState(-1)
  const searchListNote = useMemo(() => {
    if (videoAllLength > 0) {
      return `${videoAllLength}건이 검색되었습니다.`
    }
    if (videoAllLength === 0) {
      return '검색된 결과가 없습니다.'
    }
    if (videoAllLength === -1) {
      return '검색어를 입력해주세요.'
    }
    return '에러: 현재 검색이 불가합니다.'
  }, [videoAllLength])
  const searchValueRef = useRef(null)
  const searchModalRef = useRef(null)

  const searchValue = useMemo(
    () => ({
      videoInfos,
      videoAllLength,
      searchListNote,
    }),
    [videoInfos, videoAllLength, searchListNote],
  )
  const searchAction = useMemo(
    () => ({
      setVideoInfos,
      setVideoAllLength,
    }),
    [],
  )
  const searchRef = useMemo(
    () => ({
      searchValueRef,
      searchModalRef,
    }),
    [],
  )
  return (
    <SearchValueContext.Provider value={searchValue}>
      <SearchActionContext.Provider value={searchAction}>
        <SearchRefContext.Provider value={searchRef}>
          {children}
        </SearchRefContext.Provider>
      </SearchActionContext.Provider>
    </SearchValueContext.Provider>
  )
}

export { SearchValueContext, SearchActionContext, SearchRefContext }
