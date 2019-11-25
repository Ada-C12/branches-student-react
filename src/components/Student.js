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

  onBirthdayChange = (event) => {
    this.setState({ 
      birthday: event.target.value
    });
  }

  togglePronounsDisplay = () => {
    this.setState({
      displayPronouns: !this.state.displayPronouns,

    })
  }

  render = () => {

    console.log('the value of props is', this.props);

    //this.state.birthday = 'Oct 22nd'

    // I want to pass specific data from A to B. The format of this data is a name/value pair.
    // To SEND the data from A to B, when I use the <>, I will pass every name/value pair like they are attributes
    let pronouns = null;
    if (this.state.displayPronouns) {
      pronouns = <li>Pronouns: {this.state.pronouns}</li>;
    }
    
    return (
      <section>
        <h2 className="student-name">{this.state.fullName} -- "{this.props.nickName}"</h2>
        <ul className="student-details">
          {pronouns}
          <li>Birthday: {this.state.birthday}</li>
        </ul>
        <button onClick={this.togglePronounsDisplay}>Toggle Display of Pronouns</button>
        <p>Change your birthday: <input onChange={ this.onBirthdayChange }></input></p>
      </section>
    );
  }
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