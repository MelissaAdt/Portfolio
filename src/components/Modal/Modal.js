import React from 'react';
import Modal from 'react-modal';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css';
import '../../index.css';
import './Modal.css';

Modal.setAppElement('#root');

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <button onClick={onRequestClose} className="modal-close-button">
        <CloseIcon />
      </button>
      <h2 className="modal-title">{project.name}</h2>
      <p className="modal-description">{project.description}</p>
      <div className="modal-content">
        <div className="modal-image-container">
          <div className='modal-image' style={{ backgroundImage: `url(${project.modalImage})` }}></div>
        </div>
        <div className="modal-details">
          <p className="modal-description"><strong>Année :</strong> {project.year}</p>
          {project.mission && (
            <div className="modal-mission">
              <h3 className="modal-specif">Mission :</h3>
              <p className="modal-description">{project.mission}</p>
            </div>
          )}
          {project.stack && (
            <div className="modal-stack-section">
              <h3 className="modal-specif">Technologies utilisées :</h3>
              <ul className='modal-stack'>
                {project.stack.map((item) => (
                  <li key={item} className='modal-stack-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className='modal-links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
