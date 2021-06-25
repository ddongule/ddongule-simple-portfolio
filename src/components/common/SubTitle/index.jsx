import React from 'react';
import './index.scss';

const SubTitle = ({ children }) => {
  return (
    <div className='subtitle'>
      <h3 className='subtitle__h3'>{children}</h3>
    </div>
  );
};

export default SubTitle;
