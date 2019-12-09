import React from 'react';
import Student from './Student';
import NewStudentForm from './NewStudentForm';

class StudentCollection extends React.Component {

  constructor() {
    super();

    this.state = {
      students: [
        {
          name: "Ada",
          nickName: "The Lovelacer",
          pronouns: 'They/Them',
          birthday: 'October?????',
          isPresent: false,
        },
        {
          name: "Katherine",
          nickName: "\"out of this world\"",
          pronouns: 'She/Her',
          birthday: 'March.',
          isPresent: false,
        },
      ],
    }
  }

  // Every Event Handler MUST be defined as an arrow function like this... otherwise 'this' will not work
  markPresent = (studentIdentifier) => {
    const updatedStudents = this.state.students;
    updatedStudents[studentIdentifier].isPresent = true;

    this.setState({
      students: updatedStudents,
    });
  }

  addStudent = (student) => {
    console.log(`Adding Student ${ student }`);
    const { students } = this.state;

    students.push(student);
    this.setState({
      students,
    });
  }

  render () {
    const studentComponents = this.state.students.map((student, i) => {
      return (
        <li key={i}>
          <Student
            fullName={student.name}
            nickName={student.nickName}
            pronouns={student.pronouns}
            isPresent={student.isPresent}
            markPresentCallback={this.markPresent}
            studentIdentifier={i}
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
        <NewStudentForm addStudentCallback={this.addStudent} />
      </section>
    );
  }
}

export default StudentCollection;