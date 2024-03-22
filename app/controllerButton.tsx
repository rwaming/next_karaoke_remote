import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import AppContext from './AppContext'
import {
  applause,
  moveTime,
  playPause,
  setSpeed,
  setVolume,
  showLatestVideo,
  closeSearchBox,
  stop,
} from './controllerFunctions'
import ApplauseAudios from './applauseAudios'

export default function ControllerButton({
  id,
  text,
}: {
  id: string
  text: string
}): JSX.Element {
  const {
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoDate,
    isPlaying,
    setIsPlaying,
    playerRef,
    searchRef,
    controllerRef,
  } = useContext(AppContext)

  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const lastestClass = id.includes('latest') ? 'text-xs' : 'text-2xl'

  const findButtonFunction = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      void (
        id.includes('latest') &&
        showLatestVideo(setVideoID, setVideoTitle, setVideoDate, setIsPlaying)
      )
      id.includes('search') &&
        closeSearchBox(playerRef, searchRef, controllerRef)
      id.includes('playpause') && playPause(videoEvent, isPlaying, setIsPlaying)
      id.includes('stop') && stop(videoEvent, setIsPlaying)
      id.includes('time') && moveTime(event, videoEvent)
      id.includes('volume') && setVolume(event, videoEvent)
      id.includes('speed') && setSpeed(event, videoEvent)
      id.includes('applause') &&
        applause([applauseRef1, applauseRef2, applauseRef3, applauseRef4])
    },
    [
      controllerRef,
      id,
      isPlaying,
      playerRef,
      searchRef,
      setIsPlaying,
      setVideoDate,
      setVideoID,
      setVideoTitle,
      videoEvent,
    ],
  )

  return (
    <>
      <button
        type="button"
        id={id}
        className={`${lastestClass}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          findButtonFunction(event)
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
