import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <h5>API Base url {process.env.REACT_APP_API_BASE_URL}</h5>
        <form>
          <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
        </form>
      </header>
    </div>
  );
}

export default App;
