import './index.scss';

import ProjectItem from './ProjectItem';
import React from 'react';
import SubTitle from '../common/SubTitle';
import myData from '../../db.json';

const Project = () => {
  const { projects } = myData;

  return (
    <>
      {projects && (
        <>
          <SubTitle>Projects</SubTitle>
          <div className='projects-container'>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Project;
