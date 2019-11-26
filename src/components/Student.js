import React from 'react';
import PropTypes from 'prop-types';

import './Student.css'

const Student = (props) => {
  return (
    <section className={ props.isPresent ? "present" : "absent" }>
      <h2 className="student-name">{props.fullName} -- "{props.nickName}"</h2>

      <button disabled={ props.isPresent }>Mark Present</button>
    </section>
  );
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
}

export default Student;