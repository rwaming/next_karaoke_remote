'use client'

import { useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { type Div } from '../../utils/Types'

export default function Menu(): JSX.Element {
  const router = useRouter()
  const menuRef = useRef<Div>(null)

  const menuOpen = useCallback(() => {
    const menu = menuRef.current
    if (menu !== null) {
      menu.classList.add('menu-opened')
    }
  }, [])
  const menuClose = useCallback(() => {
    const menu = menuRef.current
    if (menu !== null) {
      menu.classList.remove('menu-opened')
    }
  }, [])
  let menuCloseWait: NodeJS.Timeout
  return (
    <section id='menu'>
      <button
        type='button'
        id='menu-modal'
        className='absolute -left-4 -top-4 z-40 h-dvh w-dvw bg-slate-900 bg-opacity-50 text-transparent sm:-left-5'>
        메뉴 닫기
      </button>
      <button
        id='menu__open'
        type='button'
        className='absolute left-0 top-0 z-50 h-8 w-20 overflow-hidden whitespace-nowrap text-transparent'
        onMouseEnter={() => {
          if (window.innerWidth > 640) {
            menuOpen()
          }
        }}
        onClick={() => {
          if (window.innerWidth < 640) {
            menuOpen()
          } else {
            router.push('/homekono')
          }
        }}>
        메뉴 열기, 홈으로 이동
      </button>
      <nav
        ref={menuRef}
        id='menu-box'
        className='menu-box absolute z-40 h-dvh w-2/3vw bg-deep xs:w-1/2vw sm:w-2/5vw md:w-1/3vw'
        onMouseEnter={() => {
          if (window.innerWidth > 640) {
            clearTimeout(menuCloseWait)
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 640) {
            menuCloseWait = setTimeout(menuClose, 4000)
          }
        }}>
        <ul>
          <li>홈코노</li>
          <li>RWAM</li>
        </ul>
        <address
          id='menu-contact'
          className='contact not-italic sm:relative sm:flex sm:h-full sm:items-center sm:justify-center sm:gap-3 sm:text-xs'>
          <div
            id='menu-contact-sns'
            className='sm:flex sm:items-center sm:gap-2'>
            <Link
              href='https://www.instagram.com/rwam__kn'
              target='_blank'
              aria-label='menu-contact-sns__instagram'>
              <Image
                id='menu-contact-sns__instagram'
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
              aria-label='menu-contact-sns__naver-blog'>
              <Image
                id='menu-contact-sns__naver-blog'
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
              aria-label='menu-contact-sns__github'>
              <Image
                id='menu-contact-sns__github'
                src='/icon_github.png'
                width={40}
                height={40}
                alt='contact_github'
                className='h-4 w-4'
              />
            </Link>
          </div>

          <div
            id='menu_contact-info'
            className='menu_contact-info flex items-center sm:h-full sm:min-w-10 sm:items-center'>
            <button
              type='button'
              className='w-10 overflow-hidden opacity-100 sm:whitespace-nowrap'>
              + more
            </button>
            <div className='whitespace-nowrap opacity-0 sm:flex sm:w-0 sm:items-center sm:overflow-hidden'>
              <p id='menu_contact-info__email' className='sm:inline-block'>
                art.rwam@gmail.com
              </p>
              <p id='menu_contact-info__phone' className='ml-2 sm:inline-block'>
                +82 010-9716-1132
              </p>
            </div>
          </div>
        </address>
      </nav>
    </section>
  )
}
