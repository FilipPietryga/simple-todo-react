import './App.css'
import { useState, useEffect } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("ITEM")
    if(!items) return []
    return JSON.parse(items)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((current) => {
      return [...current,
        {id: crypto.randomUUID(), title: title, completed: false}
      ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos((todos) => {
      return todos.map(item => {
        if(item.id === id) {
          return {...item, completed};
        }
        return item;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id);
    })
  }

  return <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className='header'>Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
}

export default App
