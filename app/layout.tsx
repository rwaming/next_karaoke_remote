import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/motion.css'

import Link from 'next/link'
import Image from 'next/image'
import Menu from '@/components/menu'
import { updateDate, updateDateText } from './utils/utilities'

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
        <div className='app bg relative h-dvh w-dvw text-light'>
          <header className='header absolute left-0 top-0 ml-4 mt-4 flex items-center sm:left-1'>
            <div className='title-group relative z-50 overflow-x-hidden whitespace-nowrap'>
              <h1 className='title h-8 select-none pl-2 text-2xl font-bold xs:text-2xl'>
                홈코노
              </h1>
              <p className='update absolute left-16 top-3 z-50 pl-2 text-xs font-light opacity-0 transition-opacity sm:ml-2 sm:inline sm:opacity-75'>
                <time dateTime={updateDate}>{updateDateText}</time>
              </p>
            </div>
            <button
              type='button'
              className='title-group__open absolute left-1 top-1 z-50 h-6 w-6'>
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

          <footer className='absolute bottom-0 mb-3 hidden h-5 w-full transition-all sm:block'>
            <address className='contact flex h-full items-center justify-center gap-3 text-xs not-italic'>
              <div className='contact-names font-bold'>
                <p className='inline'>RWAM</p>
                <p className='ml-1 inline'>김성주</p>
              </div>

              <div className='contact-sns flex items-center gap-2'>
                <Link
                  href='https://www.instagram.com/rwam__kn'
                  target='_blank'
                  aria-label='contact-sns__instagram'>
                  <Image
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
                    src='/icon_github.png'
                    width={40}
                    height={40}
                    alt='contact_github'
                    className='h-4 w-4'
                  />
                </Link>
              </div>

              <div className='contact-more flex h-full min-w-10 items-center'>
                <button
                  type='button'
                  className='w-10 overflow-hidden whitespace-nowrap opacity-100'>
                  + more
                </button>
                <div className='contact-emailphone flex w-0 items-center overflow-hidden whitespace-nowrap opacity-0'>
                  <p className='inline-block'>art.rwam@gmail.com</p>
                  <p className='ml-2 inline-block'>+82 010-9716-1132</p>
                </div>
              </div>
            </address>
          </footer>
        </div>
      </body>
    </html>
  )
}
