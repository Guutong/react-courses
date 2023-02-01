import React from 'react';

interface Student {
  id: number;
  name: string;
  age: number;
}

function App() {
  const students: Student[] = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 23 },
    { id: 3, name: 'Charlie', age: 24 },
    { id: 4, name: 'David', age: 25 },
    { id: 5, name: 'Eve', age: 26 },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          name: {student.name}, Age: {student.age}
        </li>
      ))}
    </ul>
  );
}

export default App;
