import React from 'react';
import Student from './Student';

const StudentCollection = () => {

  const students = [
    {
      name: "Ada",
      nickName: "The Lovelacer",
    },
    {
      name: "Katherine",
      nickName: "\"out of this world\"",
    },
  ];

  const studentComponents = students.map((student, i) => {
    return (
      <li key={i}>
        <Student
          fullName={student.name}
          nickName={student.nickName}
        />
      </li>
    )
  });

  return (
    <section>
      <h2>Student Collection</h2>

      <ul>
        { studentComponents }
      </ul>
    </section>
  );
}

export default StudentCollection;