import { useEffect } from 'react';
import { Todo } from './useTodo';

export function useGetTodoService(completed: (todos: Todo[]) => void) {
  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      completed(JSON.parse(todos));
    }
  }, [completed]);
}
