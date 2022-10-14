import ProjectContainer from '../components/ProjectContainer/ProjectContainer';

const projects = [{
  urlImage: './', title: 'teste',
}];

function Home() {
  return (
    <ProjectContainer projects={ projects } />
  );
}

export default Home;
