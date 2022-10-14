import PropTypes from 'prop-types';
import { Card, Container, Image, Title } from './styles';

function ProjectContainer({ projects }) {
  return (
    <Container>
      { projects.length && projects.map(({ urlImage, title }, index) => (
        <Card key={ index }>
          <Image src={ urlImage } alt="e" />
          <Title>{ title }</Title>
        </Card>
      ))}
    </Container>
  );
}

ProjectContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
  )).isRequired,
};

export default ProjectContainer;
