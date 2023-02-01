import { useRef } from 'react';
import { useAppContext } from './App';

type InputTodoProps = {
  onClickAdd: (text: string) => void;
};
export function InputTodo({ onClickAdd }: InputTodoProps) {
  const { theme } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClickAdd = () => {
    console.log('[InputTodo] add');
    if (!inputRef.current?.value) {
      return;
    }

    onClickAdd(inputRef.current?.value || '');
    inputRef.current.value = '';
  };

  console.log('[InputTodo] render');

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#282c34',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      <input
        ref={inputRef}
        type="text"
        // value={text}
        // onChange={(e) => {
        //   console.log('[InputTodo] change');

        //   setText(e.target.value)
        // }}
      />
      <button onClick={handleOnClickAdd}>Add</button>
    </div>
  );
}
