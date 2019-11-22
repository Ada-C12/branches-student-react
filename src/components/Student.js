import React from 'react';

const Student = (props) => {
  console.log('the value of props is', props);

  // I want to pass specific data from A to B. The format of this data is a name/value pair.
  // To SEND the data from A to B, when I use the <>, I will pass every name/value pair like they are attributes
  return (
    <section>
      <h2>{props.fullName} -- "{props.nickName}"</h2>
      <ul>
        <li>Pronouns: {props.pronouns}</li>
        <li>Birthday: {props.birthday}</li>
      </ul>
    </section>
  );
}

export default Student;