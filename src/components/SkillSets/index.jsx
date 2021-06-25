import './index.scss';

import React from 'react';
import SubTitle from '../common/SubTitle';
import myData from '../../db.json';

const SkillSets = () => {
  const { skillSets } = myData;

  return (
    <>
      {skillSets && (
        <>
          <SubTitle>Skill Sets</SubTitle>
          <div className='skill-sets-container'>
            <div className='description'>
              <div className='description-item'>
                <span className='level expert'>4 - 5</span>: 많이 사용해보았으며 자신이 있는 기술
              </div>
              <div className='description-item'>
                <span className='level'>3</span>: 어느 정도 프로젝트에 적용할 수 있는 기술
              </div>
              <div className='description-item'>
                <span className='level'>1 - 2</span>: 현재 관심이 있어 입문 수준인 기술
              </div>
            </div>
            {skillSets.map((set, index) => (
              <div className='skill-set' key={index}>
                <div className='category'>{set.category}</div>
                <div className='items'>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, index) => (
                      <div className='item' key={index}>
                        <span className='skill'>{skill}</span>
                        {level && <span className={`level ${level > 3 && 'expert'}`}>{level}</span>}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SkillSets;
