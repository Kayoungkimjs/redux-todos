import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './features/todos/todoSlice'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Write your todos</h1>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
