import { ThemeToggle, useAppContext } from './App';
import { InputTodo } from './InputTodo';
import { useTodo } from './useTodo';

export function TodoList() {
  const { theme } = useAppContext();
  const {
    filteredTodos,
    setFilter,
    handleAddTodo,
    handleUpdateTodo,
    handleRemoveTodo,
  } = useTodo();

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: theme === 'light' ? '#ffffff' : '#282c34',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      <ThemeToggle />

      <InputTodo onClickAdd={handleAddTodo} />
      <br></br>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>

      <ul
        style={{
          backgroundColor: theme === 'light' ? '#ffffff' : '#282c34',
          color: theme === 'light' ? '#000000' : '#ffffff',
        }}
      >
        {filteredTodos.map((todo, index) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              <span style={{ marginRight: 2 }}>{todo.text}</span>
              <button
                style={{
                  color: '#fff',
                  backgroundColor: todo.completed ? 'salmon' : 'green',
                  border: '1px solid #eee',
                  margin: 2,
                  borderRadius: 5,
                }}
                onClick={() => handleUpdateTodo(todo)}
              >
                {todo.completed ? 'Redo' : 'Completed'}
              </button>
              <button
                style={{
                  color: '#fff',
                  backgroundColor: 'salmon',
                  border: '1px solid #eee',
                  margin: 2,
                  borderRadius: 5,
                }}
                onClick={() => handleRemoveTodo(todo)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
