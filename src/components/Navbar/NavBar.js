import { Container, Link } from './styles';

const paths = {
  home: 'home', about: 'about', projects: 'projects',
};

function NavBar() {
  const path = 'home';
  return (
    <Container>
      <Link href="/home" active={ path === paths.home }>Home</Link>
      <Link href="/about" active={ path === paths.about }>About me</Link>
      <Link href="/projects" active={ path === paths.projects }>Projects</Link>
    </Container>
  );
}

export default NavBar;
