import { useState } from 'react';

type InputTodoProps = {
  onClickAdd: (text: string) => void;
};
function InputTodo({ onClickAdd }: InputTodoProps) {
  const [text, setText] = useState('');

  const handleOnClickAdd = () => {
    onClickAdd(text);
    setText('');
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleOnClickAdd}>Add</button>
    </>
  );
}

interface Todo {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const todo: Todo = {
      id: new Date().getTime(),
      text,
      completed: false,
    };
    setTodo([...todos, todo]);
  };

  const handleUpdateTodo = (todo: Todo) => {
    todo.completed = !todo.completed;
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = todo;
    setTodo([...todos]);
  };

  const handleRemoveTodo = (todo: Todo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    setTodo([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div>
      <InputTodo onClickAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
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
        ))}
      </ul>
    </div>
  );
}

export default App;
