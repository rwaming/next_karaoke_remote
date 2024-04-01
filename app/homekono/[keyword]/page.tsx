export default function Play({
  params,
}: {
  params: { keyword: string }
}): JSX.Element {
  const decodedKeyword = decodeURIComponent(params.keyword)
  return (
    <div id='player-content__search'>
      <p>{`${decodedKeyword} `} 노래를 찾고 있어요.</p>
    </div>
  )
}
