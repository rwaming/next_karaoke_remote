import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import { type Button } from '../utils/Types'
import playPause from '../function/playPause'
import showLatestVideo from '../function/showLatestVideo'
import stopVideo from '../function/stopVideo'
import timeMove from '../function/timeMove'
import volumeUpDown from '../function/volumeUpDown'
import speedUpDown from '../function/speedUpDown'
import applause from '../function/applause'
import AppContext from '../utils/AppContext'
import ApplauseAudios from './controllerApplauseAudios'
import searchOpenClose from '../function/searchOpenClose'

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
  const {
    videoEvent,
    setVideoID,
    setVideoTitle,
    setVideoArtist,
    setVideoNumber,
    setVideoDate,
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
  } = useContext(AppContext)

  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const controllerFunctions = useCallback(
    (event: MouseEvent<Button>) => {
      void (
        id.includes('latest') &&
        showLatestVideo(
          setVideoID,
          setVideoTitle,
          setVideoArtist,
          setVideoNumber,
          setVideoDate,
        )
      )
      id.includes('search') &&
        searchOpenClose(playerRef, controllerRef, searchRef, searchModalRef)
      id.includes('playpause') && playPause(videoEvent)
      id.includes('stop') && stopVideo(videoEvent)
      id.includes('time') && timeMove(event, videoEvent)
      id.includes('volume') && volumeUpDown(event, videoEvent)
      id.includes('speed') && speedUpDown(event, videoEvent)
      id.includes('applause') &&
        applause([applauseRef1, applauseRef2, applauseRef3, applauseRef4])
    },
    [
      controllerRef,
      id,
      playerRef,
      searchModalRef,
      searchRef,
      setVideoArtist,
      setVideoDate,
      setVideoID,
      setVideoNumber,
      setVideoTitle,
      videoEvent,
    ],
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
            <span className='button-bigger'>{emoji}</span>
            <span className='button-tight'>{text}</span>
          </>
        )}
        {id.includes('backward') && (
          <span className=''>
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
