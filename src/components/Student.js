import React from 'react';
import PropTypes from 'prop-types';

import './Student.css'

const togglePronounsDisplay = (props) => {
  console.log('Toggling display of pronouns', props);
  props.toggleDisplayPronouns(props.id);
}



const Student = (props) => {

  const onBirthdayChange = (event) => {
    console.log('onBirthdayChange');
    if (event && event.target && event.target.value) {
      props.updateBirthday(props.id, event.target.value);
    } else {
      console.log('event is broken onBirthdayChange');
    }
  }

  const { birthday, fullName, nickName } = props;

  let pronouns = null;
  if (props.displayPronouns) {
    pronouns = <li>Pronouns: {props.pronouns}</li>;
  }

  return (
    <section>
      <h2 className="student-name">{fullName} -- "{nickName}"</h2>
      <ul className="student-details">
        {pronouns}
        <li>Birthday: {birthday}</li>
      </ul>
      <button onClick={() => togglePronounsDisplay(props)}>Toggle Display of Pronouns</button>
      {pronouns ? pronouns : ""}
      <p>Change your birthday: <input value={props.birthday} onChange={onBirthdayChange}></input></p>
    </section>
  );
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  birthday: PropTypes.string,
  displayPronouns: PropTypes.bool,
  toggleDisplayPronouns: PropTypes.func,
  demos: PropTypes.shape({
    age: PropTypes.number.isRequired,
    grade: PropTypes.string,
    house: PropTypes.string.isRequired,
  }).isRequired,
}

export default Student;