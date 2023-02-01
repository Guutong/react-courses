import React from 'react';

function Profile() {
  return (
    <div>
      <h1>Hello, John!</h1>
      <p>You are 19 years old.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Profile></Profile>
      <Profile />
      {Profile()}
    </>
  );
}

export default App;
