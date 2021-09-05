import './index.scss';
import '../../../sharedStyles/markdown.scss';

import React, { useEffect, useState } from 'react';
import parse from "html-react-parser";
import noImage from '../../../assets/static/images/no-image.png'
import useModal from '../../../hooks/useModal';
import ModalPortal from '../../ModalPortal';
import mmd from '../../../assets/mmd';

const ProjectItem = ({
  title,
  term,
  imgUrl = '../../../assets/static/images/no-image.png',
  tags,
  description,
  attribution,
  projectUrl,
  detailMdName,
  githubUrl,
  useDetailMd,
}) => {
  const { isModalShown, showModal, hideModal } = useModal();
  const [modalContent, setModalContent] = useState("");
  const addDefaultSrc=({target}) => (target.src = noImage)

  const ProjectDetailWithLink = ({ children }) => 
    <a
      className='project__details'
      href={projectUrl}
      target='_blank'
      rel='noopener noreferrer'
    >{children}</a>

  const ProjectDetailWithModal = ({ children }) => {
    return (
      <>
      <button className='project__details' onClick={showModal}>
        {children}  
      </button>
      {isModalShown && 
        <ModalPortal onClose={hideModal}>
          <div className="markdown">
            {parse(modalContent)}
          </div>
        </ModalPortal>
      }
      </>
    )
  }

  const ProjectDetail = ({ children }) => 
    useDetailMd 
      ? <ProjectDetailWithModal children={children} />
      : <ProjectDetailWithLink children={children} />

  useEffect(() => {
    if (!detailMdName) return;

    import(`../../../assets/static/markdown/${detailMdName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setModalContent(mmd(res)))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);

        return '';
      });
  }, [detailMdName]);

  useEffect(() => {
    document.body.style.overflow = isModalShown ? "hidden" : "unset";
  }, [isModalShown]);

  return (
    <div className='project'>
      <ProjectDetail>
        <div className='item__image'>
          <img src={imgUrl} alt={`${title} logo 이미지`} onError={addDefaultSrc} />
        </div>
        <div className='item__details'>
          <div className='title'>
            {title} <span className='term'>({term})</span>
          </div>
          <div className='description'>{description}</div>
          <div className='attribution'>{attribution}</div>
          <div className='tags'>
            {tags.map((tag, index) => (
              <div key={index} className='tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </ProjectDetail>
      {githubUrl && (
        <div className='project__links'>
          <a href={githubUrl}>
            <div className='github-logo' />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
