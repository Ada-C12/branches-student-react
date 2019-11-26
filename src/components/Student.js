import React from 'react';
import PropTypes from 'prop-types';

import './Student.css'

class Student extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fullName: props.fullName,
      pronouns: props.pronouns,
      birthday: props.birthday
    }
  }

  render = () => {
    return (
      <section>
        <h2 className="student-name">{this.state.fullName} -- "{this.props.nickName}"</h2>
        <p>Is {this.state.fullName} present today? { this.props.isPresent ? "yes" : "no" }</p>
      </section>
    );
  }
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
}

export default Student;