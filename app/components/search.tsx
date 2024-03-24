import { useContext, useMemo, useState } from 'react'
import { type VideoInfos } from '@/utils/TypeCustum'
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
        className="absolute left-0 top-0 hidden h-screen w-screen cursor-default bg-gray-800 bg-opacity-50 text-transparent"
        onClick={() => {
          searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
        }}
      >
        Close
      </button>
      <section
        ref={searchRef}
        id="search"
        className="fixed hidden w-screen flex-col bg-light text-dark"
      >
        <SearchArea />
        <div
          id="search-list"
          className="relative flex-grow overflow-x-scroll py-3 md:px-1/10vw"
        >
          <p id="search-list__note" className="p-2 text-center text-xs">
            {listNote}
          </p>

          {allVideoLength > 0 && <SearchList />}
        </div>
        <button
          id="search-close"
          type="button"
          className="absolute bottom-0 right-0 hidden p-4 text-dark md:block"
          onClick={() => {
            searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}
        >
          ✕
        </button>
      </section>
    </SearchContext.Provider>
  )
}
