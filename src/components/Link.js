import React from 'react';

import './Link.css'

const Link = (props) => {
  const { url, text } = props;


  return (
    <div className="link-container clickable">
      <a
        href={url}
      >
        {text}
      </a>
    </div>
  )
};

export default Link;