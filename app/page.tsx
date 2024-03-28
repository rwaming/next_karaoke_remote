'use client'

import { useEffect } from 'react'
import AppProvider from '../utils/AppProvider'
import gapiInit from '../utils/gapiInit'
import Controller from '../components/controller'
import Search from '../components/search'
import Player from '../components/player'

export default function Main(): JSX.Element {
  useEffect(() => {
    void gapiInit()
  }, [])
  return (
    <AppProvider>
      <main
        id='main'
        className='flex h-full w-full flex-col justify-center sm:flex-row'>
        <Player />
        <Search />
        <Controller />
      </main>
    </AppProvider>
  )
}
