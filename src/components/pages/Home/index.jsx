import './index.scss';

import React, { useContext, useRef } from 'react';

import AboutMe from '../../AboutMe';
import { CSSTransition } from 'react-transition-group';
import Education from '../../Education';
import Experience from '../../Experience';
import Footer from '../../Footer';
import PageWrapper from '../../common/PageWrapper';
import Projects from '../../Projects';
import SkillSets from '../../SkillSets';
import { ThemeChangeContext } from '../../../context/themeChangeContext';
import ThemeMode from '../../ThemeMode';
import Timestamp from '../../Timestamp';
import Title from '../../common/Title';

const Home = () => {
  const { darkTheme } = useContext(ThemeChangeContext);
  const nodeRef = useRef(null);

  return (
    <CSSTransition classNames='fade' in={!darkTheme} timeout={300} nodeRef={nodeRef}>
      <PageWrapper ref={nodeRef}>
        <ThemeMode />
        <Title />
        <AboutMe />

        <SkillSets />
        <Projects />
        <Timestamp />
        <Experience />
        <Education />
        <Footer />
      </PageWrapper>
    </CSSTransition>
  );
};

export default Home;
