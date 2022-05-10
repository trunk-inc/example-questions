import { screen, fireEvent, render } from '@testing-library/react'
import { App } from '../App'

const inputToDo = (title: string, body: string) => {
  fireEvent.change(screen.getByLabelText('名前'), { target: { value: title } })
  fireEvent.change(screen.getByLabelText('説明'), { target: { value: body } })
}

const expectToDo = (title: string, body: string) => {
  expect(screen.getByText(title)).toBeInTheDocument()
  expect(screen.getByText(body)).toBeInTheDocument()
}

test('ToDoの作成、表示、削除', async () => {
  render(<App />)
  fireEvent.click(screen.getByText('ToDoを追加'))

  inputToDo('牛乳を買う', 'カルボナーラを作るために必要')
  fireEvent.click(screen.getByText('追加'))

  expect(await screen.findByText('ToDo一覧')).toBeInTheDocument()
  expectToDo('牛乳を買う', 'カルボナーラを作るために必要')

  fireEvent.click(screen.getByText('ToDoを追加'))

  inputToDo('ベーコンを買う', 'これもカルボナーラを作るために必要')
  fireEvent.click(screen.getByText('追加'))

  expect(await screen.findByText('ToDo一覧')).toBeInTheDocument()
  expectToDo('牛乳を買う', 'カルボナーラを作るために必要')
  expectToDo('ベーコンを買う', 'これもカルボナーラを作るために必要')

  expect(screen.queryByText(/牛乳を買う/)).toBeTruthy()
  fireEvent.click(screen.getAllByText('削除')[0])
  expect(screen.queryByText(/牛乳を買う/)).toBeFalsy()
})
