import './index.scss';

import React from 'react';
import SubTitle from '../common/SubTitle'
import TimeStampItem from './TimestampItem';
import myData from '../../db.json';

const Timestamp = () => {
  const { timestamp } = myData;

  return (
    <>
      {timestamp &&
        <>
          <SubTitle>Timestamp</SubTitle>
          <div className='timestamp-container'>
            {timestamp.map((time, index) => (
              <TimeStampItem key={index} {...time} />
            ))}
          </div>
        </>
      }
    </>
  );
};

export default Timestamp;
