'use client'

import AppProvider from '@/utils/AppProvider'
import Controller from '@/homekono/components/controller'
import Player from '@/homekono/components/player'
import Search from '@/homekono/components/search'
import LoadingBody from '@/loadingBody'

export default function Homekono(): JSX.Element {
  return (
    <main
      id='homekono'
      className='flex h-full w-full flex-col justify-center sm:flex-row'>
      <LoadingBody isHome={false} />
      <AppProvider>
        <Player />
        <Search />
        <Controller />
      </AppProvider>
    </main>
  )
}
