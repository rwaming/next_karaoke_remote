import { createContext } from 'react'
import { type Button, type Div, type Input, type UseRef } from './Types'

const AppRefContext = createContext<{
  playerRef: UseRef<Div>
  controllerRef: UseRef<Div>
  searchRef: UseRef<Div>
  searchValueRef: UseRef<Input>
  searchModalRef: UseRef<Button>
}>({
  playerRef: { current: null },
  controllerRef: { current: null },
  searchRef: { current: null },
  searchValueRef: { current: null },
  searchModalRef: { current: null },
})

export default AppRefContext
