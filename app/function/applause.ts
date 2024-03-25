import { type UseRefArray, type Audio } from '@/utils/Types'

export default function applause(audioRefs: UseRefArray<Audio>): void {
  const refLength = audioRefs.length

  // 1. Find a idle audio => play
  for (let i = 0; i < refLength; i++) {
    const audio = audioRefs[i].current
    if (audio !== null && audio.paused) {
      void audio.play()
      return
    }
  }
  // All audioes are playing
  // 2. Find a oldest audio => play
  let prevPlayedTime = 8 // max 7sec
  for (let i = 0; i < refLength; i++) {
    const audio = audioRefs[i].current
    if (audio !== null) {
      const playedTime = audio.currentTime

      // audio 1: just save playTime
      // Find a oldest audio in 2~4 => replay
      if (i > 0) {
        if (playedTime > prevPlayedTime) {
          audio.currentTime = 0
          void audio.play()
          return
        }
      }
      // 2~4 are newer => replay 1
      if (i === refLength - 1) {
        const firstAudio = audioRefs[0].current
        if (firstAudio !== null) {
          firstAudio.currentTime = 0
          void firstAudio.play()
          return
        }
      }
      // Save played time of 1~3
      prevPlayedTime = playedTime
    }
  }
}
