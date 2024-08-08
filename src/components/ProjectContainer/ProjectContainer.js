import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Modal from '../Modal/Modal'; 
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className='project' onClick={openModal}>
        <div className='project__image' style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className='project__overlay'>
          <div className='project__content'>
            <h3>{project.name}</h3>
            <p className='project__description'>{project.description}</p>
            {project.stack && (
              <ul className='project__stack'>
                {project.stack.map((item) => (
                  <li key={item} className='project__stack-item'>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className='project__links'>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  aria-label='source code'
                  className='link link--icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHubIcon />
                </a>
              )}
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  aria-label='live preview'
                  className='link link--icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <LaunchIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        project={project}
      />
    </div>
  );
};

export default ProjectContainer;
