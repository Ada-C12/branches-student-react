import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import Link from './components/Link';

function App () {
  return (
    <div className="App">
      <h1>Welcome to the Student React App!</h1>
      <StudentCollection />
    </div>
  );
}

export default App;
