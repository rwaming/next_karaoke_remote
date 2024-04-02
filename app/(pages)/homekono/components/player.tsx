import { useContext } from 'react'
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
  const { playerState } = useContext(HomekonoValueContext)
  const { playerRef, playerLoadingRef, playerReadyRef } =
    useContext(HomekonoRefContext)

  const pathname = usePathname()

  return (
    <section
      ref={playerRef}
      className='player relative z-10 flex max-h-1/3dvh flex-shrink flex-col sm:m-4 sm:mb-11 sm:mr-0 sm:mt-16 sm:max-h-none sm:flex-1'>
      <h2 className='hidden'>노래 영상</h2>

      {pathname !== '/homekono' &&
        !pathname.includes('novideo') &&
        playerState !== '' &&
        !playerState.includes('Error') && (
          <p
            ref={playerLoadingRef}
            className='player-loading absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-75'>
            화면을 만들고 있어요.
          </p>
        )}
      {pathname !== '/homekono' && !pathname.includes('novideo') && (
        <p
          ref={playerReadyRef}
          className='player-ready absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 opacity-75'>
          노래를 불러오고 있어요.
        </p>
      )}
      {playerState.includes('Error') && (
        <p className='player-error absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {playerState}
        </p>
      )}

      <div className='player-content relative flex h-16-9dvh w-full justify-center overflow-hidden bg-dark bg-opacity-50 sm:h-full sm:flex-col sm:items-center sm:rounded-lg'>
        {children}
      </div>
    </section>
  )
}
