import './index.scss';

import React from 'react';

const TimeStampItem = ({ title, when, description, organizer, tags }) => {
  return (
    <div className='timestamp'>
      <div className='timestamp__main'>
        <div className='when'>{when}</div>
        <div className='title'>{title}</div>
      </div>
      <div className='timestamp__details'>
        <div className='organizer'>{organizer}</div>
        {tags.map((tag, index) => (
          <div key={index} className='tags'>
            {tag}
          </div>
        ))}
      </div>
      <div className='timestamp__description'>{description}</div>
    </div>
  );
};

export default TimeStampItem;
