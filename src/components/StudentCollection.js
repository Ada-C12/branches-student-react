import React from 'react';
import Student from './Student';

const StudentCollection = () => {

  const students = [
    {
      name: "Ada",
      nickName: "The Lovelacer",
      pronouns: 'They/Them'
    },
    {
      name: "Katherine",
      nickName: "\"out of this world\"",
      pronouns: 'She/Her'
    },
  ];

  const studentComponents = students.map((student, i) => {
    const demographics = {
      age: 21,
      grade: 'Junior',
      house: 'Slytheryn',
    }
    return (
      <li key={i}>
        <Student
          fullName={student.name}
          nickName={student.nickName}
          pronouns={student.pronouns}
        />
      </li>
    )
  });

  return (
    <section>
      <h2>Student Collection</h2>

      <ul>
        {studentComponents}
      </ul>
    </section>
  );
}

export default StudentCollection;