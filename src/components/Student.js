import React from 'react';
import PropTypes from 'prop-types';

import './Student.css'

const Student = (props) => {
  return (
    <section>
      <h2 className="student-name">{props.fullName} -- "{props.nickName}"</h2>
      <p>Is {props.fullName} present today? { props.isPresent ? "yes" : "no" }</p>
    </section>
  );
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
}

export default Student;