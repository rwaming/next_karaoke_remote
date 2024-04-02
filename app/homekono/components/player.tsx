import { useContext } from 'react'
import Link from 'next/link'
import {
  HomekonoRefContext,
  HomekonoValueContext,
} from '@/utils/HomekonoProvider'
import { usePathname } from 'next/navigation'

export default function Player({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const { videoID, videoTitle, videoArtist, videoNumber, videoDate } =
    useContext(HomekonoValueContext)
  const { playerRef, playerLoadingRef, playerReadyRef } =
    useContext(HomekonoRefContext)

  const pathname = usePathname()

  return (
    <section
      ref={playerRef}
      id='player'
      className='player relative z-10 flex max-h-1/3dvh flex-shrink flex-col sm:m-4 sm:mb-11 sm:mr-0 sm:mt-16 sm:max-h-none sm:flex-1'>
      <h2 className='hidden'>노래 영상</h2>

      {pathname !== '/homekono' &&
        videoID !== '' &&
        !videoID.includes('Error') && (
          <p
            ref={playerLoadingRef}
            id='player-loading'
            className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-75'>
            화면을 만들고 있어요.
          </p>
        )}
      {pathname !== '/homekono' && (
        <p
          ref={playerReadyRef}
          id='player-ready'
          className='absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 opacity-75'>
          노래를 불러오고 있어요.
        </p>
      )}
      {videoID.includes('Error') && (
        <p
          id='player-error'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {videoID}
        </p>
      )}

      <div
        id='player-content'
        className='player-content relative flex h-16-9dvh w-full justify-center overflow-hidden bg-dark bg-opacity-50 sm:h-full sm:flex-col sm:items-center sm:rounded-lg'>
        {children}

        {videoID !== '' && (
          <figure
            id='information'
            className='absolute bottom-0 left-0 hidden w-full bg-dark bg-opacity-50 text-xs opacity-0'>
            <figcaption>영상 정보</figcaption>
            <p>
              <Link
                href={`https://www.youtube.com/watch?v=${videoID}`}
                target='_blank'>{`https://www.youtube.com/watch?v=${videoID}`}</Link>
            </p>
            <p className='inline'>{videoTitle} / </p>
            <p className='inline'>{videoArtist} / </p>
            <p className='inline'>{videoNumber}</p>
            <p>{videoDate}</p>
          </figure>
        )}
      </div>
    </section>
  )
}
