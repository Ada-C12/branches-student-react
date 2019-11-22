import React from 'react';
import PropTypes from 'prop-types';

import './Student.css'

const Student = (props) => {
  console.log('the value of props is', props);

  // I want to pass specific data from A to B. The format of this data is a name/value pair.
  // To SEND the data from A to B, when I use the <>, I will pass every name/value pair like they are attributes
  return (
    <section>
      <h2 className="student-name">{props.fullName} -- "{props.nickName}"</h2>
      <ul className="student-details">
        <li>Pronouns: {props.pronouns}</li>
        <li>Birthday: {props.birthday}</li>
      </ul>
    </section>
  );
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  birthday: PropTypes.string,
  demos: PropTypes.shape({
    age: PropTypes.number.isRequired,
    grade: PropTypes.string,
    house: PropTypes.string.isRequired,
  }).isRequired,
}

export default Student;