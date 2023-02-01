import { useCallback } from 'react';
import { InputTodo } from './InputTodo';
import { useGetTodoService } from './useGetTodoService';
import { Todo, useTodo } from './useTodo';

export function TodoList() {
  const {
    filteredTodos,
    setFilter,
    handleAddTodo,
    handleUpdateTodo,
    handleRemoveTodo,
  } = useTodo();

  const handleDataLoaded = useCallback((data: Todo[]) => {
    console.log('receive data: ', data);
  }, []);

  useGetTodoService(handleDataLoaded);

  return (
    <div>
      <InputTodo onClickAdd={handleAddTodo} />
      <br></br>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>

      <ul>
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
