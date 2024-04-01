'use client'

import HomekonoProvider from '@/utils/HomekonoProvider'
import Search from '@/homekono/components/search'
import Controller from '@/homekono/components/controller'
import Player from './components/player'

export default function HomekonoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <main
      id='homekono'
      className='flex h-full w-full flex-col justify-center sm:flex-row'>
      <HomekonoProvider>
        <Player>{children}</Player>
        <Search />
        <Controller />
      </HomekonoProvider>
    </main>
  )
}
