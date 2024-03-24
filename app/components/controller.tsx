import { useContext } from 'react'
import ControllerButton from './controllerButton'
import AppContext from '../utils/AppContext'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppContext)

  return (
    <section
      ref={controllerRef}
      id="controller"
      className="flex flex-grow flex-col text-dark md:shrink-0 md:grow-0">
      <h3 className="invisible absolute">리모콘</h3>
      <div className="flex flex-grow">
        <ControllerButton
          id="controller-volumeup"
          text="▲뮤 직"
          className="bg-button1 flex-grow"
        />
        <ControllerButton
          id="controller-volumemute"
          text="🔇"
          className="bg-button1"
        />
        <ControllerButton
          id="controller-volumedown"
          text="▼뮤 직"
          className="bg-button1 flex-grow"
        />
      </div>
      <div className="flex flex-grow">
        <ControllerButton
          id="controller-speeddown"
          text="▲템 포"
          className="bg-button1 flex-grow"
        />
        <ControllerButton
          id="controller-speedup"
          text="▼템 포"
          className="bg-button1 flex-grow"
        />
      </div>
      <div className="flex flex-grow">
        <ControllerButton
          id="controller-timebackward"
          text="◀️◀️마디점프"
          className="bg-button1 flex-grow"
        />
        <ControllerButton
          id="controller-playpause"
          text="⏸일시정지"
          className="bg-button1 flex-grow"
        />
        <ControllerButton
          id="controller-timeforward"
          text="마디점프▶️▶️"
          className="bg-button1 flex-grow"
        />
      </div>
      <div className="flex flex-grow">
        <ControllerButton
          id="controller-applause"
          text="박 수"
          className="bg-button2 flex-grow"
        />
        <ControllerButton
          id="controller-latest"
          text="신곡연습"
          className="bg-button2 flex-grow"
        />
        <ControllerButton
          id="controller-search"
          text="검 색"
          className="bg-button2 flex-grow"
        />
        <ControllerButton
          id="controller-stop"
          text="취소"
          className="bg-button3 flex-grow"
        />
      </div>
    </section>
  )
}
