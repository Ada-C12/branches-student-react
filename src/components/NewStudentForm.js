import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewStudentForm.css';

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

  nickNameValid = () => {
    return this.state.nickName.match(/\S+@\S+/);
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;

    this.setState(updatedState);
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
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="nickName">Nick Name:</label>
          <input
            name="nickName"
            id="nickName"
            type="text"
            className={this.nickNameValid() ? "valid-nickname" : "invalid-nickname"}
            onChange={this.onInputChange}
            value={this.state.nickName}
          />
        </div>
        <div>
          <label htmlFor="pronouns">Pronouns:</label>
          <select
            name="pronouns"
            id="pronouns"
            onChange={this.onInputChange}
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
            onChange={this.onInputChange}
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