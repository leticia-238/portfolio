import NavBar from './NavBar';
import NavLink from './NavLink';

function Header() {
  return (
    <header>
      <NavBar>
        <NavLink href="88888">
          Home
        </NavLink>
        <NavLink href="88888">
          Projects
        </NavLink>
        <NavLink href="88888">
          About me
        </NavLink>
      </NavBar>
    </header>
  );
}

export default Header;
