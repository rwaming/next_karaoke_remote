import { type YouTubeEvent } from 'react-youtube'

export function playPause(
  videoEvent: null | YouTubeEvent,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  if (videoEvent !== null) {
    if (isPlaying) {
      videoEvent.target.pauseVideo()
      setIsPlaying(false)
    } else {
      videoEvent.target.playVideo()
      setIsPlaying(true)
    }
  }
}

export function moveTime(videoEvent: null | YouTubeEvent): void {
  if (videoEvent !== null) {
    /*
    기본은 15초로 하자

      player.getCurrentTime():Number
동영상 재생이 시작된 이후의 경과 시간을 초 단위로 반환합니다.

player.seekTo(seconds:Number, allowSeekAhead:Boolean):Void
동영상에서 지정한 시간을 찾습니다. 함수가 호출될 때 플레이어가 일시중지되면 일시중지로 유지됩니다. 함수가 다른 상태(playing, video cued 등)에서 호출되면 플레이어가 동영상을 재생합니다.
allowSeekAhead 매개변수는 seconds 매개변수가 현재 버퍼링된 동영상 데이터를 벗어난 시간을 지정한 경우 플레이어가 서버에 새 스트림 요청을 할지 결정.
ㄴ 때문에, 드래그 중에는 false로 설정하는 것이 좋음

1. 10초 만들기

    */
    console.log('controll moveTime')
  }
}
