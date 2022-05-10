import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useToDoForm } from '../hooks/useToDoForm'
import { useToDoContext } from '../todoProvider'
import layoutStyles from './layout.module.css'
import formStyles from './form.module.css'

const titleInputElementID = 'title-input-element'
const bodyInputElementID = 'body-input-element'

export const ToDoNewPage: FC = () => {
  const { addToDo } = useToDoContext()
  const navigate = useNavigate()
  const { todo, onChangeTitle, onChangeBody } = useToDoForm()

  return (
    <div className={layoutStyles.contents}>
      <Link to="/">
        戻る
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addToDo({
            id: v4(),
            ...todo
          })

          navigate('/')
        }}>

        <div className={formStyles.formField}>
          <label htmlFor={titleInputElementID}>名前</label>
          <input id={titleInputElementID} type="text" className={formStyles.textField} onChange={onChangeTitle} defaultValue={todo.title} />
        </div>
        <div className={formStyles.formField}>
          <label htmlFor={bodyInputElementID} >説明</label>
          <input id={bodyInputElementID} type="text" className={formStyles.textField} onChange={onChangeBody} defaultValue={todo.body} />
        </div>
        <button className={formStyles.submit}>
          追加
        </button >
      </form >
    </div>
  )
}
