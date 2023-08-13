/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

// eslint-disable-next-line react/prop-types
export default function NewTodoForm({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className='list'>
      {todos.map(item => {
        return (
          <TodoItem
            key={item.key}
            id={item.id}
            title={item.title}
            completed={item.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}