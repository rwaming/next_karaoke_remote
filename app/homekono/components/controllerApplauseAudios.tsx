import { type Audio, type UseRefArray } from '../../utils/Types'

export default function ApplauseAudios({
  audioRefs,
  id,
}: {
  audioRefs: UseRefArray<Audio>
  id: string
}): JSX.Element {
  return (
    <div id={`${id}__audio-list`} className='absolute'>
      {[...Array(4)].map((e, i) => {
        return (
          <audio
            ref={audioRefs[i]}
            key={`${id}__audio-${i + 1}`}
            id={`${id}__audio-${i + 1}`}
            className={`${id}__audio`}
            preload='auto'>
            <source src='/applause.mp3' type='audio/mpeg' />
            <track
              src='/applause_en.vtt'
              kind='captions'
              srcLang='en'
              label='English'
            />
            <track
              src='/applause_ko.vtt'
              kind='captions'
              srcLang='ko'
              label='Korean'
            />
          </audio>
        )
      })}
    </div>
  )
}
