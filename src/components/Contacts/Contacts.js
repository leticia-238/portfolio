import { Contact, ContactBox, ContactIcon } from './styles';
import EmailIcon from './icons/envelope.png';
import GithubIcon from './icons/github-logo.png';
import LinkedinIcon from './icons/linkedin-logo.png';

function Contacts() {
  return (
    <ContactBox>
      <Contact href="https://github.com/leticia-238" target="_blank">
        <ContactIcon src={ GithubIcon } alt="github" />
      </Contact>
      <Contact href="https://www.linkedin.com/in/leticiaoliveiraandrade" target="_blank">
        <ContactIcon src={ LinkedinIcon } alt="linkedin" />
      </Contact>
      <Contact href="mailto:leticiaoliveiraandrade@gmail.com">
        <ContactIcon src={ EmailIcon } alt="email" />
      </Contact>
    </ContactBox>
  );
}

export default Contacts;
