import Contacts from '../Contacts/Contacts';
import { Name, Container, Image, Title, Description } from './styles';
import ProfileFigure from './ProfileFigure.png';

function Profile() {
  return (
    <Container>
      <Image src={ ProfileFigure } />
      <Contacts />
      <Name>Letícia Oliveira Andrade</Name>
      <Title>Desenvolvedora Web Full Stack</Title>
      <Description>
        <p>
          &ensp; Desenvolvedora de software, com experiência em projetos de front-end e
          back-end econhecimentos em HTML5, CSS3, Javascript, Typescripst, Nodejs,
          Reactjs.
        </p>
        <p>
          &ensp; Adoro acompanhar novidades na área de tecnologia e procuro sempre
          aprender melhores práticas de desenvolvimento.
        </p>
        <p>
          &ensp; Atualmente estou estudando desenvolvimento web na Trybe, onde tive a
          oportunidade de desenvolver projetos individuais e em equipe que me
          proporcionaram não só a aprendizagem de hard skills mais de soft skills também,
          como autogestão, comunicação e colaboração.
        </p>
      </Description>
    </Container>
  );
}

export default Profile;
