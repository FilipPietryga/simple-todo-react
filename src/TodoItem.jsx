// eslint-disable-next-line react/prop-types
export default function TodoItem({key, completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <>
    <label key={key}>
      <input type="checkbox" checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}/>
      {title}
    </label>
    <button className="btn btn-danger"
      onClick={() => deleteTodo(id)}
    >Delete</button>
  </>
  )
}