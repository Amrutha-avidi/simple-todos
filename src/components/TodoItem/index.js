import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoItem} = props
  const {id, title} = todoDetails

  const deleteItem = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="todoItem-container">
      <p className="todoItem-title">{title}</p>
      <button className="todoItem-button" onClick={deleteItem} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
