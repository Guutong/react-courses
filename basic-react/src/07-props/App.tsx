import React from 'react';

interface Student {
  id?: number;
  name: string;
  age: number;
}

function Profile(props: Student) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile name="John" age={20} />
      <Profile name="Jenny" age={17} />
    </div>
  );
}

export default App;
