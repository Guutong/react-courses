import { useMemo, useReducer, useState } from 'react';

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
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
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

  const filteredTodos = useMemo(() => {
    console.log('[filteredTodos] do  memo ...');
    switch (filter) {
      case 'all':
        return state.todos;
      case 'active':
        return state.todos.filter((todo) => todo.completed === false);
      case 'completed':
        return state.todos.filter((todo) => todo.completed === true);
      default:
        return state.todos;
    }
  }, [filter, state.todos]);

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

export default App;
