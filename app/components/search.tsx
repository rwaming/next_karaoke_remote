import { useContext, useMemo, useState } from 'react'
import SearchContext from '@/utils/SearchContext'
import { type VideoInfo } from '../utils/Types'
import AppContext from '../utils/AppContext'
import searchBoxClose from '../controller/searchBoxClose'
import SearchArea from './searchArea'
import SearchList from './searchList'

export default function Search(): JSX.Element {
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppContext)

  const [searchInfos, setSearchInfos] = useState<VideoInfo[] | null>(null)
  const [videoAllLength, setVideoAllLength] = useState<number | null>(null)

  const searchValue = useMemo(
    () => ({
      searchInfos,
      setSearchInfos,
      videoAllLength,
      setVideoAllLength,
    }),
    [searchInfos, videoAllLength],
  )

  return (
    <SearchContext.Provider value={searchValue}>
      <div
        ref={searchRef}
        id="search"
        className="hidden w-screen flex-col fixed z-20 bg-light text-dark"
      >
        <SearchArea
          states={{
            searchInfos,
            setSearchInfos,
            setVideoAllLength,
          }}
        />
        <div
          id="search-list"
          className="flex-grow relative overflow-x-scroll py-3 md:px-1/10vw"
        >
          <p id="search-list__note" className="text-center text-xs p-2">
            {videoAllLength === null && '검색어를 입력해주세요.'}
            {videoAllLength === 0 && '검색된 결과가 없습니다.'}
            {videoAllLength !== null &&
              videoAllLength > 0 &&
              `${videoAllLength}건이 검색되었습니다.`}
          </p>

          <ul id="search-list__ul">
            {videoAllLength !== null && videoAllLength > 0 && (
              <li id="search-list__label" className="search-list__li">
                <h6 className="search-list__li-title">제목</h6>
                <h6 className="search-list__li-artist">가수</h6>
                <h6 className="search-list__li-number">금영 번호</h6>
              </li>
            )}
            {searchInfos !== null && <SearchList searchInfos={searchInfos} />}
          </ul>
        </div>
        <button
          id="search-close"
          type="button"
          className="hidden text-dark absolute right-0 bottom-0 p-4 md:block"
          onClick={() => {
            searchBoxClose(playerRef, controllerRef, searchRef, searchModalRef)
          }}
        >
          ✕
        </button>
      </div>
      <div
        ref={searchModalRef}
        id="search-modal"
        className="hidden bg-gray-800 bg-opacity-50 w-screen h-screen absolute top-0 left-0"
      />
    </SearchContext.Provider>
  )
}
