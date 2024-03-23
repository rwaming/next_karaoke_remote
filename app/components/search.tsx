import { useContext, useMemo, useState } from 'react'
import { type VideoInfos } from '@/utils/Types'
import SearchContext from '@/utils/SearchContext'
import SearchArea from '@/components/searchArea'
import AppContext from '@/utils/AppContext'
import searchOpenClose from '@/search/searchOpenClose'
import SearchList from '@/components/searchList'

export default function Search(): JSX.Element {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppContext)

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
      setVideoInfos,
      allVideoLength,
      setAllVideoLength,
    }),
    [videoInfos, allVideoLength],
  )
  return (
    <SearchContext.Provider value={searchValue}>
      <button
        ref={searchModalRef}
        type="button"
        id="search-modal"
        className="hidden bg-gray-800 bg-opacity-50 w-screen h-screen absolute top-0 left-0 text-transparent cursor-default"
        onClick={() => {
          searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
        }}
      >
        Close
      </button>
      <div
        ref={searchRef}
        id="search"
        className="hidden w-screen flex-col fixed bg-light text-dark"
      >
        <SearchArea />
        <div
          id="search-list"
          className="flex-grow relative overflow-x-scroll py-3 md:px-1/10vw"
        >
          <p id="search-list__note" className="text-center text-xs p-2">
            {listNote}
          </p>

          {allVideoLength > 0 && <SearchList />}
        </div>
        <button
          id="search-close"
          type="button"
          className="hidden text-dark absolute right-0 bottom-0 p-4 md:block"
          onClick={() => {
            searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}
        >
          ✕
        </button>
      </div>
    </SearchContext.Provider>
  )
}
