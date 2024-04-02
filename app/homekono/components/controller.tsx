import { useContext, useRef } from 'react'
import { HomekonoRefContext } from '../../utils/HomekonoProvider'
import ControllerButton from './controllerButton'
import { type Button } from '../../utils/Types'

export default function Controller(): JSX.Element {
  const { playerRef, controllerRef } = useContext(HomekonoRefContext)
  const controllerHideRef = useRef<Button>(null)

  return (
    <section
      ref={controllerRef}
      className='controller controller__search-closed relative bottom-0 right-0 flex shrink-0 grow whitespace-nowrap text-sm font-bold text-dark xs:text-base sm:shrink-0 sm:grow-0 sm:basis-56 sm:p-1 sm:text-sm md:basis-64 md:text-base'>
      <h3 className='hidden'>리모콘</h3>
      <button
        ref={controllerHideRef}
        type='button'
        className='controller-hide absolute top-1/2 z-50 mr-2 box-content hidden h-full w-14 -translate-y-1/2 text-sm font-light text-light opacity-0 sm:block'
        onMouseEnter={() => {
          const controller = controllerRef.current
          if (controller !== null) {
            controller.classList.add('controller__ready-close')
          }
        }}
        onMouseLeave={() => {
          const controller = controllerRef.current
          if (controller !== null) {
            controller.classList.remove('controller__ready-close')
          }
        }}
        onClick={() => {
          const controller = controllerRef.current
          const controllerHide = controllerHideRef.current
          const player = playerRef.current
          if (
            controller !== null &&
            controllerHide !== null &&
            player !== null
          ) {
            controllerHide.style.visibility = 'hidden'
            setTimeout(() => {
              controllerHide.style.visibility = 'visible'
            }, 100)
            if (!controller.classList.contains('controller__closed')) {
              player.classList.add('player__controller-closed')
              controller.classList.add('controller__closed')
            } else {
              player.classList.remove('player__controller-closed')
              controller.classList.remove('controller__closed')
            }
          }
        }}>
        <span className='text-transparent'>리모콘 숨기기</span>
        <span className='absolute left-3 inline-block scale-x-75 scale-y-150 font-bold'>
          {'>'}
        </span>
      </button>
      <div className='controller-box button-col relative bottom-0 right-0 flex grow'>
        <div className='button-row basis-1/5dvh'>
          <div className='button-col'>
            <ControllerButton
              text='▲템 포'
              emoji=''
              className='controller-speedup bg-button1'
            />
            <ControllerButton
              text='▼템 포'
              emoji=''
              className='controller-speeddown bg-button1'
            />
          </div>
          <div className='button-col'>
            <ControllerButton
              text='▲뮤 직'
              emoji=''
              className='controller-volumeup bg-button1'
            />
            <ControllerButton
              text='▼뮤 직'
              emoji=''
              className='controller-volumedown bg-button1'
            />
          </div>
          <div className='button-col'>
            <ControllerButton
              text='👏박 수'
              emoji=''
              className='controller-applause bg-button2'
            />
            <ControllerButton
              text='🔇음소거'
              emoji=''
              className='controller-volumemute bg-button1'
            />
          </div>
        </div>
        <div className='button-row inessential basis-0'>
          <ControllerButton
            text='◀️ 마디점프'
            emoji='◀️'
            className='controller-timebackward emoji bg-button1'
          />
          <ControllerButton
            text='마디점프 '
            emoji='▶️▶️'
            className='controller-timeforward emoji bg-button1'
          />
        </div>
        <div className='button-row'>
          <ControllerButton
            text='일시정지'
            emoji='⏯'
            className='controller-playpause emoji bg-button2'
          />
          <ControllerButton
            text='취소'
            emoji=''
            className='controller-stop basis-1/2 bg-button3'
          />
        </div>
      </div>
    </section>
  )
}
