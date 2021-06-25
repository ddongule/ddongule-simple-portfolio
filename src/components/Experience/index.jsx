import './index.scss';

import Event from '../common/Event';
import React from 'react';
import SubTitle from '../common/SubTitle'
import myData from '../../db.json';

const Experience = () => {
  const { experiences } = myData;

  return (
    <>
      {experiences && 
      <>
        <SubTitle>Experiences</SubTitle>
        <div className='experience-container'>
          {experiences.map((experience, index) => (
            <Event key={index} event={experience} />
          ))}
        </div>
      </>
      
      }
    </>
  );
};

export default Experience;
