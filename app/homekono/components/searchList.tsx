import { useContext, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  HomekonoActionContext,
  HomekonoRefContext,
} from '../../utils/HomekonoProvider'
import {
  SearchRefContext,
  SearchValueContext,
} from '../../utils/SearchProvider'
import videoSelected from '../functions/videoSelected'
import searchOpenClose from '../functions/searchOpenClose'

export default function SearchList(): JSX.Element {
  const { setPlayerState } = useContext(HomekonoActionContext)
  const { playerRef, controllerRef, searchRef } = useContext(HomekonoRefContext)
  const {
    videoInfos,
    searchListNote: listNote,
    videoAllLength,
  } = useContext(SearchValueContext)
  const { searchModalRef } = useContext(SearchRefContext)

  const router = useRouter()
  const changeVideoArgs = useMemo(
    () => ({
      playerRef,
      controllerRef,
      searchRef,
      searchModalRef,
      videoInfos,
      setPlayerState,
      router,
    }),
    [
      controllerRef,
      playerRef,
      router,
      searchModalRef,
      searchRef,
      setPlayerState,
      videoInfos,
    ],
  )
  return (
    <div
      ref={searchRef}
      className='search-box z-20 hidden min-h-2/3dvh w-full grow flex-col overflow-hidden bg-deep sm:top-0 sm:h-1/2dvh sm:min-h-0 sm:rounded-b-lg sm:drop-shadow-lg'>
      <section className='search-list relative top-16 flex-grow overflow-scroll px-4 pb-10 sm:px-1/10vw'>
        <h4 className='hidden'>노래 목록</h4>
        <p className='search-list__note p-3 text-center text-sm'>{listNote}</p>

        {videoAllLength > 0 && (
          <ul className='search-list__ul'>
            <li className='search-list__label search-list__li'>
              <h6 className='search-list__li-title'>제목</h6>
              <h6 className='search-list__li-artist'>가수</h6>
              <h6 className='search-list__li-number'>금영 번호</h6>
            </li>

            {videoInfos?.map((v, i) => {
              if (typeof v === 'object') {
                return (
                  <li
                    key={`${v.title}`}
                    id={`search-list__li-${i}`}
                    className='search-list__li'>
                    <button
                      type='button'
                      className='search-list__li-click'
                      onClick={(event) => {
                        videoSelected(event, changeVideoArgs)
                      }}>
                      <p className='search-list__li-title'>{v.title}</p>
                      <p className='search-list__li-artist'>{v.artist}</p>
                      <p className='search-list__li-number'>{v.number}</p>
                    </button>
                  </li>
                )
              }
              return null
            })}
          </ul>
        )}
      </section>
      <button
        type='button'
        className='search-close absolute bottom-0 right-0 hidden p-4 opacity-75 sm:block'
        onClick={() => {
          searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
        }}>
        ✕
      </button>
    </div>
  )
}
