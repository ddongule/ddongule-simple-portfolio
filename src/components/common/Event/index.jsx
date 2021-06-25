import './index.scss';

import React from 'react';
import noImage from '../../../assets/static/images/no-image.png'

const Event = ({ event }) => {
  const { imgUrl, experienceUrl, title, term, description, attribution, tags } =
    event;
  
  const addDefaultSrc=({target}) => (target.src = noImage)

  return (
    <a href={experienceUrl} target='_blank' rel='noopener noreferrer'>
      <div className='experience'>
        <div className='item__image'>
          <img src={imgUrl} alt={`${title} logo 이미지`} onError={addDefaultSrc} />
        </div>
        <div className='item__details'>
          <div className='title'>
            {title} <span className='term'>({term})</span>
          </div>
          <div className='description'>{description}</div>
          {attribution && <div className='attribution'>{attribution}</div>}

          {tags && (
            <div className='tags'>
              {tags.map((tag) => (
                <div className='tag'>{tag}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Event;
