'use client'

import { useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { updateDate, updateDateText } from '@/utils/utilities'
import { type Button, type Div } from '../utils/Types'

export default function Menu(): JSX.Element {
  const router = useRouter()
  const menuRef = useRef<Div>(null)
  const menuModalRef = useRef<Button>(null)
  let menuCloseWait: NodeJS.Timeout

  const menuOpen = useCallback(() => {
    const menu = menuRef.current
    const menuModal = menuModalRef.current
    if (menu !== null && menuModal !== null) {
      menuModal.classList.remove('hidden')
      menuModal.classList.remove('menu-modal__closed')
      menu.classList.add('menu__opened')
      menu.classList.remove('hidden')
      menuModal.classList.add('menu-modal__opened')
    }
  }, [])

  const menuClose = useCallback(() => {
    const menu = menuRef.current
    const menuModal = menuModalRef.current
    if (menu !== null && menuModal !== null) {
      menu.classList.remove('menu__opened')
      menuModal.classList.remove('menu-modal__opened')
      menuModal.classList.add('menu-modal__closed')
    }
  }, [])

  return (
    <section id='menu'>
      <button
        ref={menuModalRef}
        type='button'
        className='menu-modal absolute -left-4 -top-4 z-40 hidden h-dvh w-dvw bg-slate-900 bg-opacity-50 text-transparent sm:-left-5'
        onClick={menuClose}>
        메뉴 닫기
      </button>
      <button
        type='button'
        className='menu-open absolute left-0 top-0 z-50 h-8 w-20 overflow-hidden whitespace-nowrap text-transparent'
        onMouseEnter={() => {
          if (!('ontouchstart' in window)) {
            menuOpen()
          }
        }}
        onClick={() => {
          if ('ontouchstart' in window) {
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
        className='menu-box absolute z-40 h-dvh w-2/3dvw bg-deep p-8 xs:w-1/2dvw sm:w-2/5dvw sm:p-10 md:w-1/3dvw'
        onMouseEnter={() => {
          if (!('ontouchstart' in window)) {
            clearTimeout(menuCloseWait)
          }
        }}
        onMouseLeave={() => {
          if (!('ontouchstart' in window)) {
            menuCloseWait = setTimeout(menuClose, 1500)
          }
        }}>
        <p className='absolute left-6 top-12 text-xs opacity-75 transition-opacity sm:opacity-0'>
          <time dateTime={updateDate}>{updateDateText}</time>
        </p>
        <ul className='mb-6 mt-14 flex flex-col items-start gap-4 text-sm opacity-25 sm:mt-8'>
          <li>
            <button type='button' className='h-full w-full'>
              RWAM
            </button>
          </li>
          <li>
            <button type='button' className='h-full w-full'>
              홈코노 이야기
            </button>
          </li>
          <li>
            <button type='button' className='h-full w-full'>
              의견 보내기
            </button>
          </li>
        </ul>
        <p className='text-xs font-light leading-relaxed opacity-75 sm:text-sm'>
          다양한 기능을 준비하고 있어요.{' '}
          <span className='sm:mt-2 sm:block'>조금만 기다려주세요 :D</span>
        </p>

        <address className='menu-contact absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 flex-col items-center justify-end text-xs not-italic sm:hidden'>
          <div className='menu-contact-sns flex items-center gap-4'>
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

          <div className='menu-contact-more mt-3 flex h-full min-w-10 grow flex-col items-center'>
            <button
              type='button'
              className='h-4 w-10 overflow-hidden whitespace-nowrap opacity-100'>
              + more
            </button>
            <div className='mb-3 flex h-0 flex-col items-center overflow-hidden whitespace-nowrap text-center opacity-0'>
              <p>art.rwam@gmail.com</p>
              <p className='mt-2'>+82 10-9716-1132</p>
            </div>
          </div>
        </address>
      </nav>
    </section>
  )
}
