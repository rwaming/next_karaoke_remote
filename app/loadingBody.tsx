'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoadingBody({
  isHome,
}: {
  isHome: boolean
}): JSX.Element {
  const router = useRouter()
  return (
    <div
      id='loading'
      className={`${!isHome && 'loading__disappear'} bg absolute z-50 flex h-dvh w-dvw flex-col items-center justify-center`}>
      <Image
        src='/homekono_light.png'
        width={1080}
        height={1080}
        alt='homekono_loading'
        className='spin w-1/10vmin'
        onLoad={() => {
          if (isHome) {
            router.push('/homekono')
          }
        }}
      />
      <p className='dim pt-5'>페이지로 이동하고 있어요.</p>
    </div>
  )
}
