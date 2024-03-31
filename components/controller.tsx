import { useContext, useRef } from 'react'
import { AppRefContext } from '../utils/AppProvider'
import ControllerButton from './controllerButton'
import { type Div } from '../utils/Types'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppRefContext)
  const controllerBoxRef = useRef<Div>(null)

  return (
    <section
      ref={controllerRef}
      id='controller'
      className='controller relative m-4 mt-14 flex shrink-0 grow text-sm font-bold text-dark xs:text-base sm:mb-11 sm:ml-2 sm:mr-4 sm:mt-16 sm:shrink-0 sm:grow-0 sm:basis-56 sm:text-sm md:basis-64 md:p-1 md:text-base'>
      <h3 className='hidden'>리모콘</h3>
      <button
        id='controller-close'
        type='button'
        className='absolute top-1/2 z-10 mr-2 box-content hidden h-full w-14 -translate-y-1/2 whitespace-nowrap rounded-xl text-sm font-light text-light opacity-0 sm:block'
        onMouseEnter={() => {
          const controllerBox = controllerBoxRef.current
          if (controllerBox !== null) {
            controllerBox.classList.add('controller-box__ready-close')
          }
        }}
        onMouseLeave={() => {
          const controllerBox = controllerBoxRef.current
          if (controllerBox !== null) {
            controllerBox.classList.remove('controller-box__ready-close')
          }
        }}>
        <span className='text-transparent'>리모콘 숨기기</span>
        <span className='absolute left-3 inline-block scale-x-75 scale-y-150'>
          {'>'}
        </span>
      </button>
      <div
        ref={controllerBoxRef}
        id='controller-box'
        className='button-col relative bottom-0 right-0 flex grow'>
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
