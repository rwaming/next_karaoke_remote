export default function homekono(): JSX.Element {
  return (
    <div
      id='player-content__ready'
      className='flex h-full w-full flex-col items-center justify-around'>
      <div id='player-content__popular' className='font-light opacity-50'>
        인기차트 준비중
      </div>
      <div id='player-content__latest' className='font-light opacity-50'>
        최신가요 준비중
      </div>
    </div>
  )
}
