import { useCallback, useState } from 'react'
import { ToDo } from '../models/todo'

export const useToDo = () => {
  const [todos, setTodos] = useState<{ [id: string]: ToDo }>({})

  const addToDo = useCallback((todo: ToDo) => {
    setTodos((prev) => ({ ...prev, [todo.id]: todo }))
  }, [setTodos])

  const removeToDo = useCallback((id: string) => {
    setTodos((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [setTodos])

  return {
    todos,
    addToDo,
    removeToDo
  }
}

export type UseToDoReturn = ReturnType<typeof useToDo>
