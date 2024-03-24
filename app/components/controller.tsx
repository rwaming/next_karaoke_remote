import { useContext } from 'react'
import ControllerButton from './controllerButton'
import AppContext from '../utils/AppContext'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppContext)

  return (
    <section
      ref={controllerRef}
      id="controller"
      className="flex-grow md:shrink-0 md:grow-0">
      <h3 className="invisible absolute">리모콘</h3>
      <ControllerButton id="controller-latest" text="신곡연습" />
      <ControllerButton id="controller-search" text="검 색" />
      <ControllerButton id="controller-playpause" text="⏸일시정지" />
      <ControllerButton id="controller-stop" text="취소" />
      <ControllerButton id="controller-timebackward" text="◀️◀️마디점프" />
      <ControllerButton id="controller-timeforward" text="마디점프▶️▶️" />
      <ControllerButton id="controller-volumeup" text="▲뮤 직" />
      <ControllerButton id="controller-volumedown" text="▼뮤 직" />
      <ControllerButton id="controller-volumemute" text="🔇음소거" />
      <ControllerButton id="controller-speeddown" text="▲템 포" />
      <ControllerButton id="controller-speedup" text="▼템 포" />
      <ControllerButton id="controller-applause" text="박 수" />
    </section>
  )
}
