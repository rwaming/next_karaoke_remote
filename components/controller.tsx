import { useContext, useRef } from 'react'
import { AppRefContext } from '../utils/AppProvider'
import ControllerButton from './controllerButton'
import { type Button } from '../utils/Types'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppRefContext)
  const controllerOpenCloseRef = useRef<Button>(null)

  return (
    <section
      ref={controllerRef}
      id='controller'
      className='controller relative bottom-0 right-0 m-4 mt-14 flex shrink-0 grow whitespace-nowrap text-sm font-bold text-dark xs:text-base sm:mb-11 sm:ml-2 sm:mr-4 sm:mt-16 sm:max-w-56 sm:shrink-0 sm:grow-0 sm:basis-56 sm:text-sm md:max-w-64 md:basis-64 md:p-1 md:text-base'>
      <h3 className='hidden'>리모콘</h3>
      <button
        ref={controllerOpenCloseRef}
        id='controller__open-close'
        type='button'
        className='controller__open-close absolute top-1/2 z-10 mr-2 box-content hidden h-full w-14 -translate-y-1/2 text-sm font-light text-light opacity-0 sm:block'
        onMouseEnter={() => {
          const controller = controllerRef.current
          if (controller !== null) {
            controller.classList.add('controller-box__ready-close')
          }
        }}
        onMouseLeave={() => {
          const controller = controllerRef.current
          if (controller !== null) {
            controller.classList.remove('controller-box__ready-close')
          }
        }}
        onClick={() => {
          const controller = controllerRef.current
          const controllerOpenClose = controllerOpenCloseRef.current
          if (controller !== null && controllerOpenClose !== null) {
            controllerOpenClose.style.opacity = '0'
            setTimeout(() => {
              controllerOpenClose.style.opacity = '0.75'
            }, 700)
            if (!controller.classList.contains('controller_closed')) {
              controller.classList.add('controller_closed')
            } else {
              controller.classList.remove('controller_closed')
            }
          }
        }}>
        <span className='text-transparent'>리모콘 숨기기</span>
        <span className='absolute left-3 inline-block scale-x-75 scale-y-150 font-bold'>
          {'>'}
        </span>
      </button>
      <div
        id='controller-box'
        className='button-col relative bottom-0 right-0 flex min-w-56 grow'>
        <div className='button-row basis-1/5dvh'>
          <div className='button-col'>
            <ControllerButton
              id='controller-speedup'
              text='▲템 포'
              emoji=''
              className='bg-button1'
            />
            <ControllerButton
              id='controller-speeddown'
              text='▼템 포'
              emoji=''
              className='bg-button1'
            />
          </div>
          <div className='button-col'>
            <ControllerButton
              id='controller-volumeup'
              text='▲뮤 직'
              emoji=''
              className='bg-button1'
            />
            <ControllerButton
              id='controller-volumedown'
              text='▼뮤 직'
              emoji=''
              className='bg-button1'
            />
          </div>
          <div className='button-col'>
            <ControllerButton
              id='controller-volumemute'
              text='🔇음소거'
              emoji=''
              className='bg-button1'
            />
            <ControllerButton
              id='controller-playpause'
              text='일시정지'
              emoji='⏯'
              className='emoji bg-button1'
            />
          </div>
        </div>
        <div className='button-row'>
          <ControllerButton
            id='controller-timebackward'
            text='◀️ 마디점프'
            emoji='◀️'
            className='emoji bg-button1'
          />
          <ControllerButton
            id='controller-timeforward'
            text='마디점프 '
            emoji='▶️▶️'
            className='emoji bg-button1'
          />
        </div>
        <div className='button-row'>
          <ControllerButton
            id='controller-applause'
            text='👏박 수'
            emoji=''
            className='basis-1/4 bg-button2'
          />
          <ControllerButton
            id='controller-latest'
            text='🌟신곡연습'
            emoji=''
            className='basis-1/2 bg-button2'
          />
        </div>
        <ControllerButton
          id='controller-stop'
          text='취소'
          emoji=''
          className='basis-1/8dvh bg-button3'
        />
      </div>
    </section>
  )
}
