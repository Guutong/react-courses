import { useReducer, useState } from 'react';

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

interface TodoState {
  todos: Todo[];
}

interface Action {
  type: 'ADD' | 'UPDATE' | 'REMOVE';
  payload: Todo;
}

const initialState: TodoState = {
  todos: [],
};

function todoReducer(state: TodoState, action: Action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE':
      const indexForUpdate = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, indexForUpdate),
          action.payload,
          ...state.todos.slice(indexForUpdate + 1),
        ],
      };
    case 'REMOVE':
      const indexForDelete = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, indexForDelete),
          ...state.todos.slice(indexForDelete + 1),
        ],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (text: string) => {
    const todo: Todo = {
      id: new Date().getTime(),
      text,
      completed: false,
    };
    dispatch({ type: 'ADD', payload: todo });
  };

  const handleUpdateTodo = (todo: Todo) => {
    todo.completed = !todo.completed;
    dispatch({ type: 'UPDATE', payload: todo });
  };

  const handleRemoveTodo = (todo: Todo) => {
    dispatch({ type: 'REMOVE', payload: todo });
  };

  return (
    <div>
      <InputTodo onClickAdd={handleAddTodo} />
      <ul>
        {state.todos.map((todo) => (
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
