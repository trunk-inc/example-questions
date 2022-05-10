import { fireEvent, render } from '@testing-library/react'
import { App } from '../App'

test('ToDo一覧ページからToDo作成ページに遷移して戻る', async () => {
  const screen = render(<App />)
  expect(screen.getByText('ToDo一覧')).toBeInTheDocument()
  fireEvent.click(screen.getByText('ToDoを追加'))
  expect(await screen.findByText('戻る')).toBeInTheDocument()
  fireEvent.click(screen.getByText('戻る'))
  expect(await screen.findByText('ToDo一覧')).toBeInTheDocument()
})
