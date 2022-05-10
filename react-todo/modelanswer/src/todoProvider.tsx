import { createContext, FC, ReactNode, useContext } from 'react'
import { useToDo, UseToDoReturn } from './hooks/useToDo'

const todoContext = createContext<UseToDoReturn>({
  todos: {},
  addToDo: () => { },
  removeToDo: () => { }
})

export const useToDoContext = () => {
  return useContext(todoContext)
}

export const ToDoProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const todo = useToDo()

  return (<todoContext.Provider value={todo}>
    {children}
  </todoContext.Provider>)
}
