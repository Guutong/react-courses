import React from 'react';

interface Student {
  id?: number;
  name: string;
  age: number;
}

type ProfileProps = {
  student: Student;
  onClickProfile: (value: Student) => void;
};
function Profile(props: ProfileProps) {
  return (
    <div>
      <h1>Hello, {props.student.name}!</h1>
      <p>You are {props.student.age} years old.</p>
      <button onClick={() => props.onClickProfile(props.student)}>
        Click me
      </button>
      ;
    </div>
  );
}

function App() {
  const students: Student[] = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 23 },
    { id: 3, name: 'Charlie', age: 24 },
    { id: 4, name: 'David', age: 25 },
    { id: 5, name: 'Eve', age: 26 },
  ];

  const handleClick = (student: Student) => {
    console.log('Student : ', student);
  };
  return (
    <div>
      <Profile student={students[0]} onClickProfile={handleClick} />
      <Profile student={students[1]} onClickProfile={handleClick} />
    </div>
  );
}

export default App;
