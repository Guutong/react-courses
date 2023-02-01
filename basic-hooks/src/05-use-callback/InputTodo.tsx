import { useState } from 'react';

type InputTodoProps = {
  onClickAdd: (text: string) => void;
};
export function InputTodo({ onClickAdd }: InputTodoProps) {
  const [text, setText] = useState('');

  const handleOnClickAdd = () => {
    console.log('[InputTodo] add');
    onClickAdd(text);
    setText('');
  };

  console.log('[InputTodo] render');

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          console.log('[InputTodo] change');

          setText(e.target.value);
        }}
      />
      <button onClick={handleOnClickAdd}>Add</button>
    </>
  );
}
