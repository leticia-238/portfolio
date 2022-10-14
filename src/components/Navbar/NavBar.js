import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavTab } from './styles';

const paths = {
  home: '/', about: '/about', projects: '/projects',
};

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => pathname === paths[path];

  return (
    <Nav>
      <NavTab
        active={ isActive('home') }
        onClick={ () => { navigate('/'); } }
      >
        Home
      </NavTab>
      <NavTab
        active={ isActive('about') }
        onClick={ () => { navigate('/about'); } }
      >
        About me
      </NavTab>
      <NavTab
        active={ isActive('projects') }
        onClick={ () => { navigate('/projects'); } }
      >
        Projects
      </NavTab>
    </Nav>
  );
}

export default NavBar;
