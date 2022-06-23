/* eslint-disable import/extensions */
import skillsList from '../data/skillsList.js';

const skillsSection = document.querySelector('.container-skills');

const createSkillElement = (iconName) => {
  const skill = document.createElement('div');
  skill.className = 'skill';
  const iconSkill = document.createElement('i');
  iconSkill.className = `icon ${iconName}`;
  skill.appendChild(iconSkill);
  skillsSection.appendChild(skill);
};

const createSkillsList = () => {
  skillsList.forEach(({ iconName }) => {
    createSkillElement(iconName);
  });
};

export default createSkillsList;
