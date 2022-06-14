const skills = [
  { iconName: "icon-css3" },
  { iconName: "icon-html5" },
  { iconName: "icon-javascript" },
  { iconName: "icon-git" },
  { iconName: "icon-github" },
  { iconName: "icon-jest" },
  { iconName: "icon-react" },
  { iconName: "icon-redux" },
];

const skillsSection = document.querySelector(".container-skills");

const createSkillElement = (iconName) => {
  const skill = document.createElement("div");
  skill.className = "skill";
  const iconSkill = document.createElement("i");
  iconSkill.className = `icon ${iconName}`;
  skill.appendChild(iconSkill);
  skillsSection.appendChild(skill);
};

const createSkillsList = () => {
  skills.forEach(({ iconName }) => {
    createSkillElement(iconName);
  });
};

const projects = [
  { title: "To do List", repository: "", web_page: "", img: "" },
  { title: "Pixel Art", repository: "", web_page: "", img: "" },
];

const projectsSection = document.querySelector(".container-projects");

const createImageLink = ({ title, image, web_page }) => {
  const projectImage = document.createElement("img");
  projectImage.src = image;
  projectImage.alt = title;

  const link = document.createElement("a");
  link.href = web_page;
  link.target = "_blank";

  link.appendChild(projectImage);
  return link;
};

const createProjectLabel = ({ title, repository }) => {
  const label = document.createElement("div");
  label.className = "label-project";

  const projectTitle = document.createElement("h3");
  projectTitle.className = "project-title";
  projectTitle.innerText = title;

  const githubLink = document.createElement("a");
  githubLink.src = repository;
  githubLink.target = title;

  const githubIcon = document.createElement("i");
  githubIcon.className = "icon icon-github";

  githubLink.appendChild(githubIcon);
  label.appendChild(projectTitle);
  label.appendChild(githubLink);
  return label;
};

const createProjectCard = (project) => {
  const card = document.createElement("div");
  card.className = "project";

  card.appendChild(createImageLink(project));
  card.appendChild(createProjectLabel(project));
  projectsSection.appendChild(card);
};

const createProjectList = () => {
  projects.forEach((project) => {
    createProjectCard(project);
  });
};

window.onload = () => {
  createSkillsList();
  createProjectList();
};
