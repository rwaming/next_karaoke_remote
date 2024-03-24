import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import { type Button } from '@/utils/TypeCustum'
import playPause from '@/controller/playPause'
import latestVideo from '@/controller/latestVideo'
import stopVideo from '@/controller/stopVideo'
import timeMove from '@/controller/timeMove'
import volumeUpDown from '@/controller/volumeUpDown'
import speedUpDown from '@/controller/speedUpDown'
import applause from '@/controller/applause'
import AppContext from '@/utils/AppContext'
import ApplauseAudios from '@/components/controllerApplauseAudios'
import searchOpenClose from '@/search/searchOpenClose'

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
    playerRef,
    controllerRef,
    searchRef,
    searchModalRef,
  } = useContext(AppContext)

  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const setControll = useCallback(
    (event: MouseEvent<Button>) => {
      void (
        id.includes('latest') &&
        latestVideo(setVideoID, setVideoTitle, setVideoDate)
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
        className={`${id.includes('latest') ? 'text-xs' : 'text-2xl'}`}
        onClick={(event: MouseEvent<Button>) => {
          setControll(event)
        }}
      >
        {text}
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
