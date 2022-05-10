import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToDoListPage } from './pages/ToDoList'
import { ToDoNewPage } from './pages/ToDoNew'
import { ToDoProvider } from './todoProvider'

export const App: FC = () => {
  return (
    <div>
    <ToDoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<ToDoNewPage />} />
          <Route path="/" element={<ToDoListPage/ >} />
        </Routes>
      </BrowserRouter>
    </ToDoProvider>
    </div>
  )
}
