'use client'

import LoadingBody from '@/loadingBody'
import HomekonoProvider from '@/utils/HomekonoProvider'
import Search from '@/homekono/components/search'
import Controller from '@/homekono/components/controller'
import { usePathname } from 'next/navigation'
import Player from './components/player'

export default function HomekonoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const pathname = usePathname()
  return (
    <main
      id='homekono'
      className='flex h-full w-full flex-col justify-center sm:flex-row'>
      {pathname === '/homekono' && <LoadingBody goHome={false} />}
      <HomekonoProvider>
        <Player>{children}</Player>
        <Search />
        <Controller />
      </HomekonoProvider>
    </main>
  )
}
