import { useContext } from 'react'
import ControllerButton from './controllerButton'
import AppContext from '../utils/AppContext'

export default function Controller(): JSX.Element {
  const { controllerRef } = useContext(AppContext)

  return (
    <section
      ref={controllerRef}
      id="controller"
      className="flex-grow md:relative">
      <ControllerButton id="controller-latest" text="Latest Song" />
      <ControllerButton id="controller-search" text="🔍" />
      <ControllerButton id="controller-playpause" text="⏯" />
      <ControllerButton id="controller-stop" text="⏹" />
      <ControllerButton id="controller-timebackward" text="◀️" />
      <ControllerButton id="controller-timeforward" text="▶️" />
      <ControllerButton id="controller-volumeup" text="▲" />
      <ControllerButton id="controller-volumedown" text="▼" />
      <ControllerButton id="controller-volumemute" text="🔇" />
      <ControllerButton id="controller-speeddown" text="⏪" />
      <ControllerButton id="controller-speedup" text="⏩" />
      <ControllerButton id="controller-applause" text="👏" />
    </section>
  )
}
