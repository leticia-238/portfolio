/* eslint-disable import/extensions */
import projectsList from '../data/projectsList.js';

const projectsSection = document.querySelector('.container-projects');

const createImageLink = ({ title, image, webPage }) => {
  const projectImage = document.createElement('img');
  projectImage.src = image;
  projectImage.alt = title;

  const link = document.createElement('a');
  link.className = 'project-image';
  link.href = webPage;
  link.target = '_blank';

  link.appendChild(projectImage);
  return link;
};

const createProjectLabel = ({ title, repository }) => {
  const label = document.createElement('div');
  label.className = 'label-project';

  const projectTitle = document.createElement('h3');
  projectTitle.className = 'project-title';
  projectTitle.innerText = title;

  const githubLink = document.createElement('a');
  githubLink.src = repository;
  githubLink.target = title;

  const githubIcon = document.createElement('i');
  githubIcon.className = 'icon icon-github';

  githubLink.appendChild(githubIcon);
  label.appendChild(projectTitle);
  label.appendChild(githubLink);
  return label;
};

const createProjectCard = (project) => {
  const card = document.createElement('div');
  card.className = 'project';

  card.appendChild(createImageLink(project));
  card.appendChild(createProjectLabel(project));
  projectsSection.appendChild(card);
};

const createProjectsList = () => {
  projectsList.forEach((project) => {
    createProjectCard(project);
  });
};

export default createProjectsList;
