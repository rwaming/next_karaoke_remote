'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoadingBody({
  goHome,
}: {
  goHome: boolean
}): JSX.Element {
  const router = useRouter()
  return (
    <div
      id='loading'
      className='bg absolute z-50 flex h-dvh w-dvw flex-col items-center justify-center'>
      <Image
        src='/homekono_light.png'
        width={1080}
        height={1080}
        alt='homekono_loading'
        className={`${goHome ? 'dim' : 'spin'} w-1/10vmin`}
        onLoad={() => {
          if (goHome) {
            router.push('/homekono')
          }
        }}
      />
      <p className='dim pt-5'>
        {goHome ? '홈코노에 입장하고 있어요.' : '화면 요소를 가져오고 있어요.'}
      </p>
    </div>
  )
}
