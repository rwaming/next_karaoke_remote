import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import { type Button } from '../../../utils/Types'
import playPause from '../functions/playPause'
import timeMove from '../functions/timeMove'
import volumeUpDown from '../functions/volumeUpDown'
import speedUpDown from '../functions/speedUpDown'
import applause from '../functions/applause'
import ApplauseAudios from './controllerApplauseAudios'
import { HomekonoValueContext } from '../../../utils/HomekonoProvider'
import playStop from '../functions/playStop'

export default function ControllerButton({
  text,
  emoji,
  className,
}: {
  text: string
  emoji: string
  className: string
}): JSX.Element {
  const { playerEvent } = useContext(HomekonoValueContext)

  const router = useRouter()
  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const controllerFunctions = useCallback(
    (event: MouseEvent<Button>) => {
      className.includes('playpause') && playPause(playerEvent)
      className.includes('stop') && playStop(playerEvent, router)
      className.includes('time') && timeMove(event, playerEvent)
      className.includes('volume') && volumeUpDown(event, playerEvent)
      className.includes('speed') && speedUpDown(event, playerEvent)
      className.includes('applause') &&
        applause([applauseRef1, applauseRef2, applauseRef3, applauseRef4])
    },
    [className, playerEvent, router],
  )
  return (
    <>
      <button
        type='button'
        className={`button ${className}`}
        onClick={(event: MouseEvent<Button>) => {
          controllerFunctions(event)
        }}>
        {!className.includes('emoji') && text}
        {className.includes('pause') && (
          <>
            {emoji}
            <span className='button-tight'>{text}</span>
          </>
        )}
        {className.includes('backward') && (
          <span className='button-tight'>
            <span className='button-tighter'>{emoji}</span>
            {text}
          </span>
        )}
        {className.includes('forward') && (
          <span className='button-tight'>
            {text}
            <span className='button-tighter'>{emoji}</span>
          </span>
        )}
      </button>

      {className.includes('applause') && (
        <ApplauseAudios
          audioRefs={[applauseRef1, applauseRef2, applauseRef3, applauseRef4]}
        />
      )}
    </>
  )
}
