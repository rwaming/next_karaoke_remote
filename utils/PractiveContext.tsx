import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import { type SetState } from './Types'

const CounterContext = createContext<
  Array<number | { increase: SetState<number>; decrease: SetState<number> }>
>([0, { increase: () => {}, decrease: () => {} }])

function CounterProvider({ children }: { children: ReactNode }): JSX.Element {
  const [counter, setCounter] = useState(1)
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1)
      },
      decrease() {
        setCounter((prev) => prev - 1)
      },
    }),
    [],
  )

  const value = useMemo(() => [counter, actions], [counter, actions])

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

function useCounter(): Array<
  number | { increase: SetState<number>; decrease: SetState<number> }
> {
  const value = useContext(CounterContext)
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider')
  }
  return value
}

function App(): JSX.Element {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  )
}

function Value(): JSX.Element {
  const [counter] = useCounter()
  return <h1>{typeof counter === 'number' && counter}</h1>
}

function Buttons(): JSX.Element {
  const [, actions] = useCounter()

  return (
    <div>
      {typeof actions !== 'number' && (
        <>
          <button type='button' onClick={() => actions.increase}>
            +
          </button>
          <button type='button' onClick={() => actions.decrease}>
            -
          </button>
        </>
      )}
    </div>
  )
}

export default App
