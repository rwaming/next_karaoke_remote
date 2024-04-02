'use client'

import { HomekonoActionContext } from '@/utils/HomekonoProvider'
import { useContext, useEffect } from 'react'

export default function Homekono(): JSX.Element {
  const { setPlayerState } = useContext(HomekonoActionContext)
  useEffect(() => {
    setPlayerState('')
  }, [setPlayerState])
  return (
    <div className='player-content__chart flex h-full w-full flex-col items-center justify-around'>
      {/* <div className='chart-popular font-light opacity-50'>인기차트 준비중</div>
      <div className='chart-latest font-light opacity-50'>최신가요 준비중</div> */}
    </div>
  )
}
