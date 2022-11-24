import PropTypes from 'prop-types';
import { Card, CardDetails, Container, Image, Title } from './styles';
import GitHubIconLink from '../IconLink/GitHubIconLink';

function ProjectList({ projects }) {
  return (
    <Container>
      { projects.length && projects.map(({ image, title, path }, index) => (
        <Card key={ index }>
          <Image src={ image } alt={ title } />
          <CardDetails>
            <Title>{ title }</Title>
            <GitHubIconLink path={ path } />
          </CardDetails>
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
