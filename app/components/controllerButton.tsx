import { useContext, useRef, type MouseEvent } from 'react'
import { type ControllerProps } from '@/utils/types'
import setControll from '@/controller/setControll'
import AppContext from '../utils/AppContext'
import ApplauseAudios from './applauseAudios'

export default function ControllerButton({
  id,
  text,
}: ControllerProps): JSX.Element {
  const {
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
  } = useContext(AppContext)

  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const setControllArgs = {
    id,
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
    applauseRefs: [applauseRef1, applauseRef2, applauseRef3, applauseRef4],
  }

  return (
    <>
      <button
        type="button"
        id={id}
        className={`${id.includes('latest') ? 'text-xs' : 'text-2xl'}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          setControll(event, setControllArgs)
        }}
      >
        {text}
      </button>
      {id.includes('applause') && (
        <div id={`${id}__audio-list`}>
          <ApplauseAudios
            audioRefs={[applauseRef1, applauseRef2, applauseRef3, applauseRef4]}
            id={id}
          />
        </div>
      )}
    </>
  )
}
