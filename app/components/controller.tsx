import { useContext } from 'react'
import ControllerButton from './controllerButton'
import AppContext from '../utils/AppContext'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppContext)

  return (
    <section
      ref={controllerRef}
      id="controller"
      className="button-col gap-2 p-4 text-xl font-bold text-dark md:shrink-0 md:grow-0 md:basis-80">
      <h3 className="invisible absolute">리모콘</h3>
      <div className="button-row basis-1/5vh">
        <div className="button-col">
          <ControllerButton
            id="controller-speeddown"
            text="▲템 포"
            className="bg-button1"
          />
          <ControllerButton
            id="controller-speedup"
            text="▼템 포"
            className="bg-button1"
          />
        </div>
        <div className="button-col">
          <ControllerButton
            id="controller-volumeup"
            text="▲뮤 직"
            className="bg-button1"
          />
          <ControllerButton
            id="controller-volumedown"
            text="▼뮤 직"
            className="bg-button1"
          />
        </div>
        <div className="button-col grow-0">
          <ControllerButton
            id="controller-volumemute"
            text="🔇음소거"
            className="bg-button1"
          />
          <ControllerButton
            id="controller-playpause"
            text=" 일시정지"
            emoji="⏸"
            className="bg-button1 emoji"
          />
        </div>
      </div>
      <div className="button-row">
        <ControllerButton
          id="controller-timebackward"
          text="◀️ 마디점프"
          emoji="◀️"
          className="bg-button1 emoji"
        />
        <ControllerButton
          id="controller-timeforward"
          text="마디점프 "
          emoji="▶️▶️"
          className="bg-button1 emoji"
        />
      </div>
      <div className="button-row">
        <ControllerButton
          id="controller-applause"
          text="👏박 수"
          className="bg-button2 "
        />
        <div className="button-col basis-1/2vw">
          <ControllerButton
            id="controller-latest"
            text="🌟신곡연습"
            className="bg-button2"
          />
          <ControllerButton
            id="controller-search"
            text="🔍검 색"
            className="bg-button2 basis-full"
          />
        </div>
      </div>
      <ControllerButton
        id="controller-stop"
        text="취소"
        className="bg-button3 basis-1/8vh"
      />
    </section>
  )
}
