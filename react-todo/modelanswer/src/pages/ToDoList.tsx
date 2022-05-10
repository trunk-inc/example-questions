import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Click } from '../components/Click'
import { useToDoContext } from '../todoProvider'
import layoutStyles from './layout.module.css'

export const ToDoListPage: FC = () => {
  const { todos, removeToDo } = useToDoContext()
  return (
    <div className={layoutStyles.contents}>
      <Link to="/new">
        ToDoを追加
      </Link>
      <h1>ToDo一覧</h1>
      <div className={layoutStyles.list}>
        {Object.entries(todos).map(([id, todo]) => {
          return (
            <div key={id} className={layoutStyles.listItem}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <Click onClick={() => {
                removeToDo(id)
              }}>削除</Click>
            </div>
          )
        })}
        {Object.keys(todos).length === 0 && <p>ToDoが存在しません</p>}
      </div>
    </div>
  )
}
