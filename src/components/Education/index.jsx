import './index.scss';

import EducationItem from './EducationItem';
import React from 'react';
import SubTitle from '../common/SubTitle'
import myData from '../../db.json';

const Education = () => {
  const { educations } = myData;

  return (
    <>
      {educations &&
        <>
          <SubTitle>Education</SubTitle>
          <div className='education-container'>
            {educations && educations.map((education, index) => (
              <EducationItem key={index} education={education} />
            ))}
          </div>
        </>
      }
    </>
  );
};

export default Education;
