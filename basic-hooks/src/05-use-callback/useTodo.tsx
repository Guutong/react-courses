import { useState, useReducer, useMemo } from 'react';

export interface Todo {
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
  const todo = action.payload as Todo;
  switch (action.type) {
    case 'ADD':
      const newTodosAdd = [...state.todos, todo];
      return {
        ...state,
        todos: newTodosAdd,
      };
    case 'UPDATE':
      const indexForUpdate = state.todos.findIndex((t) => t.id === todo.id);
      const newTodosUpdate = [
        ...state.todos.slice(0, indexForUpdate),
        todo,
        ...state.todos.slice(indexForUpdate + 1),
      ];
      return {
        ...state,
        todos: newTodosUpdate,
      };
    case 'REMOVE':
      const indexForDelete = state.todos.findIndex((t) => t.id === todo.id);
      const newTodosDelete = [
        ...state.todos.slice(0, indexForDelete),
        ...state.todos.slice(indexForDelete + 1),
      ];
      return {
        ...state,
        todos: newTodosDelete,
      };
    default:
      return state;
  }
}
export function useTodo() {
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

  return {
    filteredTodos,
    setFilter,
    handleAddTodo,
    handleUpdateTodo,
    handleRemoveTodo,
  };
}
