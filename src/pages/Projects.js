import ProjectList from '../components/ProjectList/ProjectList';
import { projectList } from '../data/data';

function Projects() {
  return (
    <ProjectList projects={ projectList } />
  );
}

export default Projects;
