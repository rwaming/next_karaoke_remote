'use client'

import AppProvider from './utils/AppProvider'
import Controller from './components/controller'
import Search from './components/search'
import Player from './components/player'

export default function Main(): JSX.Element {
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
