import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nickName: '',
      pronouns: '',
      birthday: '',
    }
  }

  onNameChange = (event) => {
    const name = event.target.value;

    // this.setState({
    //   name,
    // });
    this.setState({
      name: name,
    });
  }

  onNickNameChange = (event) => {
    const nickName = event.target.value;

    this.setState({
      nickName,
    });

  }

  onPronounsChange = (event) => {
    const pronouns = event.target.value;

    this.setState({
      pronouns,
    });
  }

  onBirthdayChange = (event) => {
    const birthday = event.target.value;

    this.setState({
      birthday,
    });
  }

  onSubmitStudent = (event) => {
    // Stop the default page reload
    event.preventDefault();

    const student = {
      name: this.state.name,
      nickName: this.state.nickName,
      pronouns: this.state.pronouns,
      birthday: this.state.birthday,
      isPresent: false,
    }

    this.props.addStudentCallback(student);
    this.setState({
      name: '',
      nickName: '',
      pronouns: '',
      birthday: '',
    });
  }


  render () {
    console.log(this.state.name);
    return (
      <form
        name="new-student-form"
        id="new-student-form"
        onSubmit={this.onSubmitStudent}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="nickName">Nick Name:</label>
          <input
            name="nickName"
            id="nickName"
            type="text"
            onChange={this.onNickNameChange}
            value={this.state.nickName}
          />
        </div>
        <div>
          <label htmlFor="pronouns">Pronouns:</label>
          <select
            name="pronouns"
            id="pronouns"
            onChange={this.onPronounsChange}
            value={this.state.pronouns}
          >
            <option value=""></option>

            <option value="she/her">She/Her</option>
            <option value="they/them">They/Them</option>
            <option value="he/him">He/Him</option>
            <option value="xe/xir">xe/xir</option>
          </select>
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            name="birthday"
            id="birthday"
            type="date"
            onChange={this.onBirthdayChange}
            value={this.state.birthday}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

NewStudentForm.propTypes = {
  addStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;