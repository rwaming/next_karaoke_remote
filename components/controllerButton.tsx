import { useCallback, useContext, useRef, type MouseEvent } from 'react'
import { type Button } from '../utils/Types'
import playPause from '../function/playPause'
import stopVideo from '../function/stopVideo'
import timeMove from '../function/timeMove'
import volumeUpDown from '../function/volumeUpDown'
import speedUpDown from '../function/speedUpDown'
import applause from '../function/applause'
import ApplauseAudios from './controllerApplauseAudios'
import searchOpenClose from '../function/searchOpenClose'
import {
  AppActionContext,
  AppRefContext,
  AppValueContext,
} from '../utils/AppProvider'

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
  const { videoEvent } = useContext(AppValueContext)
  const {
    setVideoID,
    setVideoTitle,
    setVideoArtist,
    setVideoNumber,
    setVideoDate,
  } = useContext(AppActionContext)
  const { playerRef, controllerRef, searchRef, searchModalRef } =
    useContext(AppRefContext)

  const applauseRef1 = useRef(null)
  const applauseRef2 = useRef(null)
  const applauseRef3 = useRef(null)
  const applauseRef4 = useRef(null)

  const showLatestVideo = useCallback(async () => {
    const param = {
      part: 'snippet',
      channelId: 'UCDqaUIUSJP5EVMEI178Zfag',
      order: 'date',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: 'true',
    }
    const fetchLatestVideoInfo = await fetch(
      `/api?part=${param.part}&channelId=${param.channelId}&order=${param.order}&maxResults=${param.maxResults}&type=${param.type}&videoEmbeddable=${param.videoEmbeddable}`,
    )
    const latestVideoInfo = await fetchLatestVideoInfo.json()
    const video = latestVideoInfo.items[0]
    const videoID: string = video.id.videoId
    const videoDate: string = video.snippet.publishedAt
    const videoTitle: string = video.snippet.title
    let divided

    if (videoTitle.includes('(KY.')) {
      divided = videoTitle.split('(KY.')
    } else if (videoTitle.includes('[KY')) {
      divided = videoTitle.split('[KY')
    } else {
      divided = videoTitle.split(')')
    }
    const titleArtist = divided[0].trim().split('-')
    let title = titleArtist[0].trim()
    let artist = titleArtist.slice(1).join('')
    let number = divided[1]?.trim().split(')')[0] ?? ''
    if (title === '') {
      title = 'x'
    }
    if (artist === '') {
      artist = 'x'
    }
    if (Number.isNaN(Number(number))) {
      number = 'x'
    }
    if (title === 'x' && artist === 'x' && number === 'x') {
      title = videoTitle
    }

    setVideoID(videoID)
    setVideoTitle(title)
    setVideoArtist(artist)
    setVideoNumber(number)
    setVideoDate(videoDate)
  }, [setVideoArtist, setVideoDate, setVideoID, setVideoNumber, setVideoTitle])
  const controllerFunctions = useCallback(
    (event: MouseEvent<Button>) => {
      void (id.includes('latest') && showLatestVideo())
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
      showLatestVideo,
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
