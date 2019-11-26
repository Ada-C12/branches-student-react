import React, { Component } from 'react';
import Student from './Student';

class StudentCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: this.props.students,
    };
  }

  toggleDisplayPronouns = (studentId) => {
    console.log('Toggling Student Pronoun', studentId);
    const { students } = this.state;
    console.log(students);
    const student = students.find((student) => student.id === studentId);

    student.displayPronouns = !student.displayPronouns;

    this.setState({ students });

  }

  createStudentComponents = (list) => {

    return list.map((student, i) => {
      const demographics = {
        age: 21,
        grade: 'Junior',
        house: 'Slytheryn',
      }
      return (
        <li key={i} >
          <Student
            id={student.id}
            fullName={student.name}
            nickName={student.nickName}
            pronouns={student.pronouns}
            demos={demographics}
            displayPronouns={student.displayPronouns}
            toggleDisplayPronouns={this.toggleDisplayPronouns}
          />
        </li>
      );
    });
  }

  render () {
    const { students } = this.state;
    const studentComponents = this.createStudentComponents(students);

    return (
      <section>
        <h2>Student Collection</h2>

        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }
}

export default StudentCollection;