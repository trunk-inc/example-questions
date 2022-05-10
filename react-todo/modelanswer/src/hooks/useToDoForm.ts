import { ChangeEvent, useCallback, useMemo, useState } from 'react'

export const useToDoForm = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [setTitle])

  const onChangeBody = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value)
  }, [setBody])

  const todo = useMemo(() => ({
    title, body
  }), [title, body])

  return {
    todo,
    onChangeTitle,
    onChangeBody
  }
}
