import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Tab } from './styles';

const paths = {
  home: '/', about: '/about', projects: '/projects',
};

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => pathname === paths[path];

  return (
    <Container>
      <Tab
        active={ isActive('home') }
        onClick={ () => { navigate('/'); } }
      >
        Home
      </Tab>
      <Tab
        active={ isActive('about') }
        onClick={ () => { navigate('/about'); } }
      >
        About me
      </Tab>
      <Tab
        active={ isActive('projects') }
        onClick={ () => { navigate('/projects'); } }
      >
        Projects
      </Tab>
    </Container>
  );
}

export default NavBar;
