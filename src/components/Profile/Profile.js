import Contacts from '../Contacts/Contacts';
import { Name, Container, Image, Title } from './styles';
import ProfileFigure from './ProfileFigure.png';

function Profile() {
  return (
    <Container>
      <Image src={ ProfileFigure } />
      <Name>Letícia Oliveira Andrade</Name>
      <Title>Desenvolvedora Web Full Stack</Title>
      <Contacts />
    </Container>
  );
}

export default Profile;
