import { useContext } from 'react'
import { AppRefContext } from '../utils/AppProvider'
import ControllerButton from './controllerButton'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppRefContext)

  return (
    <section
      ref={controllerRef}
      id='controller'
      className='controller button-col m-2 text-base font-bold text-dark xs:text-xl sm:m-0 sm:mb-8 sm:ml-2 sm:shrink-0 sm:grow-0 sm:basis-64'>
      <h3 className='hidden'>리모콘</h3>
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
        <div className='button-col basis-1/2'>
          <ControllerButton
            id='controller-latest'
            text='🌟신곡연습'
            emoji=''
            className='basis-1/2 bg-button2'
          />
          <ControllerButton
            id='controller-search'
            text='🔍검 색'
            emoji=''
            className='basis-full bg-button2'
          />
        </div>
      </div>
      <ControllerButton
        id='controller-stop'
        text='취소'
        emoji=''
        className='basis-1/8dvh bg-button3'
      />
    </section>
  )
}
