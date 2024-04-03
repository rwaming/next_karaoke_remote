'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoadingBody(): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (pathname === '/') {
      router.push('/homekono')
    }
  }, [pathname, router])
  return (
    <div className='loading bg absolute z-50 flex h-dvh w-dvw flex-col items-center justify-center'>
      <Image
        src='/homekono_light.png'
        width={1080}
        height={1080}
        alt='homekono_loading'
        className={`${pathname === '/' ? 'dim' : 'spin'} w-1/10vmin`}
      />
      <p className='dim pt-5'>
        {pathname === '/'
          ? '홈코노에 입장하고 있어요.'
          : '화면 요소를 가져오고 있어요.'}
      </p>
    </div>
  )
}
