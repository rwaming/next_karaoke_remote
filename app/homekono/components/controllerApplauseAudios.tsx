import { type Audio, type UseRefArray } from '../../utils/Types'

export default function ApplauseAudios({
  audioRefs,
}: {
  audioRefs: UseRefArray<Audio>
}): JSX.Element {
  return (
    <div className='controller-applause__audio-list absolute'>
      {[...Array(4)].map((e, i) => {
        return (
          <audio
            ref={audioRefs[i]}
            key={`controller-applause__audio-${i + 1}`}
            className='controller-applause__audio'
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
