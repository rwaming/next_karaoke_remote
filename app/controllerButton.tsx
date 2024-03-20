import { useCallback, useContext, type MouseEvent } from 'react'
import AppContext from './AppContext'
import {
  applause,
  moveTime,
  playPause,
  setSpeed,
  setVolume,
  showLatestVideo,
  stop,
} from './controllerFunctions'

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
  } = useContext(AppContext)

  /** Select a function of a button clicked */
  const buttonOnclick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      void (
        id.includes('latest') &&
        showLatestVideo(setVideoID, setVideoTitle, setVideoDate, setIsPlaying)
      )
      id.includes('playpause') && playPause(videoEvent, isPlaying, setIsPlaying)
      id.includes('stop') && stop(videoEvent, setIsPlaying)
      id.includes('time') && moveTime(event, videoEvent)
      id.includes('volume') && setVolume(event, videoEvent)
      id.includes('speed') && setSpeed(event, videoEvent)
      id.includes('applause') && applause()
    },
    [
      id,
      isPlaying,
      setIsPlaying,
      setVideoDate,
      setVideoID,
      setVideoTitle,
      videoEvent,
    ],
  )

  // const applauseAudioes = useMemo(() => {
  //   if (id.includes('applause')) {
  //     return (
  //       <div id={`${id}__audio-list`}>
  //         {new Array(4).map((audio, index) => {
  //           const order = index + 1
  //           return (
  //             <audio key={order} id={`${id}__audio-${order}`} preload="auto">
  //               <source src="applause.mp3" type="audio/mpeg" />
  //               <track
  //                 src="applause_en.vtt"
  //                 kind="captions"
  //                 srcLang="en"
  //                 label="English"
  //               />
  //               <track
  //                 src="applause_ko.vtt"
  //                 kind="captions"
  //                 srcLang="ko"
  //                 label="Korean"
  //               />
  //             </audio>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  //   return null
  // }, [id])
  // console.log(applauseAudioes)

  return (
    <>
      <button
        type="button"
        id={id}
        className="border border-blue-300 block"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          buttonOnclick(event)
        }}
      >
        {text}
      </button>

      <audio id={`${id}__audio`} preload="auto">
        <source src="./applause.mp3" type="audio/mpeg" />
        <track
          src="./applause_en.vtt"
          kind="captions"
          srcLang="en"
          label="English"
        />
        <track
          src="./applause_ko.vtt"
          kind="captions"
          srcLang="ko"
          label="Korean"
        />
      </audio>
    </>
  )
}
