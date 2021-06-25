import './index.scss';

import React, { forwardRef } from 'react';

const PageWrapper = ({ children }, ref) => {
  return (
    <div className='page' ref={ref}>
      <div className='page-container'>{children}</div>
    </div>
  );
};

export default forwardRef(PageWrapper);
