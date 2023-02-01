import React, { useState } from 'react';
import './styles.css';
interface Student {
  id?: number;
  name: string;
  age: number;
  imageUrl: string;
}

type ProfileProps = {
  student: Student;
  onClickProfile?: (value: Student) => void;
};
function Profile(props: ProfileProps) {
  return (
    <div className="card">
      <img src={props.student.imageUrl} alt="" />
      <h5>Hello, {props.student.name}!</h5>
      <p>You are {props.student.age} years old.</p>
      <button
        onClick={() =>
          props.onClickProfile && props.onClickProfile(props.student)
        }
      >
        Click me
      </button>
    </div>
  );
}

function ProfilePreview(props: ProfileProps) {
  return (
    <div className="card">
      <img src={props.student.imageUrl} alt="" />
      <h5>Hello, {props.student.name}!</h5>
      <p>You are {props.student.age} years old.</p>
    </div>
  );
}

function App() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const students: Student[] = [
    {
      id: 1,
      name: 'Alice',
      age: 22,
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Bob',
      age: 23,
      imageUrl:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Charlie',
      age: 24,
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'David',
      age: 25,
      imageUrl:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      name: 'Eve',
      age: 26,
      imageUrl:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  const handleClick = (student: Student) => {
    console.log('Student : ', student);
    setSelectedStudent(student);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <div>
        Your select:
        {selectedStudent && <ProfilePreview student={selectedStudent} />}
      </div>
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          textAlign: 'center',
        }}
      >
        {students.map((student) => (
          <Profile student={student} onClickProfile={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
