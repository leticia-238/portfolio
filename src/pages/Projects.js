import ProjectList from '../components/ProjectList/ProjectList';

const projects = [{
  urlImage: './', title: 'teste',
}];

function Projects() {
  return (
    <ProjectList projects={ projects } />
  );
}

export default Projects;
