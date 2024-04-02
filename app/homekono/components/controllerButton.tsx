import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import { type Button } from '../../utils/Types'
import playPause from '../functions/playPause'
import timeMove from '../functions/timeMove'
import volumeUpDown from '../functions/volumeUpDown'
import speedUpDown from '../functions/speedUpDown'
import applause from '../functions/applause'
import ApplauseAudios from './controllerApplauseAudios'
import { HomekonoValueContext } from '../../utils/HomekonoProvider'
import playStop from '../functions/playStop'

export default function ControllerButton({
  id,
  text,
  emoji,
  className,
}: {
  id: string
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
      id.includes('playpause') && playPause(playerEvent)
      id.includes('stop') && playStop(playerEvent, router)
      id.includes('time') && timeMove(event, playerEvent)
      id.includes('volume') && volumeUpDown(event, playerEvent)
      id.includes('speed') && speedUpDown(event, playerEvent)
      id.includes('applause') &&
        applause([applauseRef1, applauseRef2, applauseRef3, applauseRef4])
    },
    [id, playerEvent, router],
  )
  return (
    <>
      <button
        type='button'
        id={id}
        className={`button ${className}`}
        onClick={(event: MouseEvent<Button>) => {
          controllerFunctions(event)
        }}>
        {!className.includes('emoji') && text}
        {id.includes('pause') && (
          <>
            {emoji}
            <span className='button-tight'>{text}</span>
          </>
        )}
        {id.includes('backward') && (
          <span className='button-tight'>
            <span className='button-tighter'>{emoji}</span>
            {text}
          </span>
        )}
        {id.includes('forward') && (
          <span className='button-tight'>
            {text}
            <span className='button-tighter'>{emoji}</span>
          </span>
        )}
      </button>

      {id.includes('applause') && (
        <ApplauseAudios
          audioRefs={[applauseRef1, applauseRef2, applauseRef3, applauseRef4]}
          id={id}
        />
      )}
    </>
  )
}
