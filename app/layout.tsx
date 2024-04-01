import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/motion.css'

import Link from 'next/link'
import Image from 'next/image'
import Menu from '@/homekono/components/menu'

export const metadata: Metadata = {
  title: '홈코노 - 집에서 즐기는 나만의 노래방',
  description: 'Generated by RWAMIN',
  icons: {
    icon: '/homekono_dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='ko'>
      <body>
        <div id='app' className='app w-scree bg relative h-dvh text-light'>
          <header
            id='header'
            className='header absolute left-0 top-0 ml-4 mt-4 flex items-center sm:left-1'>
            <div
              id='header__group'
              className='relative z-50 overflow-x-hidden whitespace-nowrap'>
              <h1 className='h-8 select-none pl-2 text-2xl font-bold xs:text-2xl'>
                홈코노
              </h1>
              <p
                id='update'
                className='update absolute left-16 top-3 z-50 hidden pl-2 text-xs font-light opacity-75 sm:ml-2 sm:inline'>
                <time dateTime='2024-03-30' className='inline-block'>
                  2024. 04. 01. 월요일
                </time>
              </p>
            </div>
            <button
              type='button'
              id='header__open'
              className='absolute left-1 top-1 z-50 h-6 w-6'>
              <Image
                src='/homekono_light.png'
                width={1080}
                height={1080}
                alt='Homekono'
                className='h-6 w-6'
              />
            </button>
            <Menu />
          </header>

          {children}

          <footer
            id='footer'
            className='mb-3 hidden transition-all sm:absolute sm:bottom-0 sm:block sm:h-5 sm:w-full'>
            <address
              id='contact'
              className='contact not-italic sm:relative sm:flex sm:h-full sm:items-center sm:justify-center sm:gap-3 sm:text-xs'>
              <div id='contact-name' className='font-bold'>
                <p id='contact-name__en' className='sm:inline'>
                  RWAM
                </p>
                <p id='contact-name__ko' className='ml-1 sm:inline'>
                  김성주
                </p>
              </div>

              <div
                id='contact-sns'
                className='sm:flex sm:items-center sm:gap-2'>
                <Link
                  href='https://www.instagram.com/rwam__kn'
                  target='_blank'
                  aria-label='contact-sns__instagram'>
                  <Image
                    id='contact-sns__instagram'
                    src='/icon_instagram.png'
                    width={40}
                    height={40}
                    alt='contact_instagram'
                    className='h-4 w-4'
                  />
                </Link>
                <Link
                  href='https://blog.naver.com/rwaming'
                  target='_blank'
                  aria-label='contact-sns__naver-blog'>
                  <Image
                    id='contact-sns__naver-blog'
                    src='/icon_naver.png'
                    width={40}
                    height={40}
                    alt='contact_naver_blog'
                    className='h-4 w-4'
                  />
                </Link>
                <Link
                  href='https://github.com/rwaming/next_karaoke_remote'
                  target='_blank'
                  aria-label='contact-sns__github'>
                  <Image
                    id='contact-sns__github'
                    src='/icon_github.png'
                    width={40}
                    height={40}
                    alt='contact_github'
                    className='h-4 w-4'
                  />
                </Link>
              </div>

              <div
                id='contact-info'
                className='contact-info flex items-center sm:h-full sm:min-w-10 sm:items-center'>
                <button
                  type='button'
                  className='w-10 overflow-hidden opacity-100 sm:whitespace-nowrap'>
                  + more
                </button>
                <div className='whitespace-nowrap opacity-0 sm:flex sm:w-0 sm:items-center sm:overflow-hidden'>
                  <p id='contact-info__email' className='sm:inline-block'>
                    art.rwam@gmail.com
                  </p>
                  <p id='contact-info__phone' className='ml-2 sm:inline-block'>
                    +82 010-9716-1132
                  </p>
                </div>
              </div>
            </address>
          </footer>
        </div>
      </body>
    </html>
  )
}
