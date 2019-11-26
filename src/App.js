import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import Link from './components/Link';

const students = [
  {
    id: 1,
    name: "Ada",
    nickName: "The Lovelacer",
    pronouns: 'They/Them',
    displayPronouns: false,
    birthday: '2011-01-02',
  },
  {
    id: 2,
    name: "Katherine",
    nickName: "\"out of this world\"",
    pronouns: 'She/Her',
    displayPronouns: false,
    birthday: '1977-06-21',
  },
]

function App () {
  return (
    <div className="App">
      <h1>Welcome to the Student React App!</h1>
      <StudentCollection students={students} />
    </div>
  );
}

export default App;
