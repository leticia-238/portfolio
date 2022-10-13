import NavBar from '../components/Navbar/NavBar';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';

const projects = [{
  urlImage: './', title: 'teste',
}];

function Home() {
  return (
    <>
      <NavBar />
      <ProjectContainer projects={ projects } />
    </>
  );
}

export default Home;
