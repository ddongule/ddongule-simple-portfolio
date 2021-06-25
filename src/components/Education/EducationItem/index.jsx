import React from 'react';
import './index.scss';

const EducationItem = ({ education }) => {
  const { title, term, description } = education;
  return (
    <div className='education'>
      <div className='item__details'>
        <div className='term'>[{term}]</div>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

export default EducationItem;
