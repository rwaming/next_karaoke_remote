import {
  type ReactNode,
  createContext,
  useMemo,
  useState,
  useContext,
} from 'react'
import { type VideoInfos, type SetState } from './Types'

const SearchValueContext = createContext<{
  videoInfos: VideoInfos
  allVideoLength: number
  listNote: string
}>({
  videoInfos: [],
  allVideoLength: -1,
  listNote: '',
})
function useSearchValue(): {
  videoInfos: VideoInfos
  allVideoLength: number
  listNote: string
} {
  const value = useContext(SearchValueContext)
  if (value === undefined) {
    throw new Error('SearchValueContext is not found')
  }
  return value
}
const SearchActionContext = createContext<{
  setVideoInfos: SetState<VideoInfos>
  setAllVideoLength: SetState<number>
}>({
  setVideoInfos: () => {},
  setAllVideoLength: () => {},
})
function useSearchAction(): {
  setVideoInfos: SetState<VideoInfos>
  setAllVideoLength: SetState<number>
} {
  const value = useContext(SearchActionContext)
  if (value === undefined) {
    throw new Error('SearchActionContext is not found')
  }
  return value
}

export default function SearchProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [videoInfos, setVideoInfos] = useState<VideoInfos>([])
  const [allVideoLength, setAllVideoLength] = useState(-1)
  const listNote = useMemo(() => {
    if (allVideoLength > 0) {
      return `${allVideoLength}건이 검색되었습니다.`
    }
    if (allVideoLength === 0) {
      return '검색된 결과가 없습니다.'
    }
    if (allVideoLength === -1) {
      return '검색어를 입력해주세요.'
    }
    return '에러: 현재 검색이 불가합니다.'
  }, [allVideoLength])

  const searchValue = useMemo(
    () => ({
      videoInfos,
      allVideoLength,
      listNote,
    }),
    [videoInfos, allVideoLength, listNote],
  )
  const searchAction = useMemo(
    () => ({
      setVideoInfos,
      setAllVideoLength,
    }),
    [],
  )
  return (
    <SearchValueContext.Provider value={searchValue}>
      <SearchActionContext.Provider value={searchAction}>
        {children}
      </SearchActionContext.Provider>
    </SearchValueContext.Provider>
  )
}

export { useSearchValue, useSearchAction }
