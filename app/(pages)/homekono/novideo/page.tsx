export default function NoVideo(): JSX.Element {
  return (
    <div
      id='player-content__no-video'
      className='flex h-full w-full flex-col items-center justify-center font-light'>
      <p>노래를 찾을 수 없어요!</p>
      <p className='mt-2 text-sm opacity-75'>
        다른 키워드로 다시 검색해 주세요.
      </p>
    </div>
  )
}
