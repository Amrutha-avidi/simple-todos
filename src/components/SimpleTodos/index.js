import {Component} from 'react'

import TodoItem from '../TodoItem'
import './index.css'

const intialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order Fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: intialTodosList}

  deleteTodoItem = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(each => each.id !== id)

    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="main-bg">
        <div className="card-bg">
          <h1 className="card-head">Simple Todos</h1>
          <ul className="todo-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                deleteTodoItem={this.deleteTodoItem}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
