import PropTypes from 'prop-types';
import { Card, Container, Image, Title } from './styles';
import { PAGE_URL_BASE, GITHUB_URL_BASE } from '../../data/data';

function ProjectList({ projects }) {
  return (
    <Container>
      { projects.length && projects.map(({ image, title, path }, index) => (
        <Card key={ index }>
          <Image src={ image } alt={ title } />
          <a href={ `${PAGE_URL_BASE}${path}` }>web-page</a>
          <a href={ `${GITHUB_URL_BASE}${path}` }>github</a>
          <Title>{ title }</Title>
        </Card>
      ))}
    </Container>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
  )).isRequired,
};

export default ProjectList;
