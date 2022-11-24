import ContactBox from './styles';
import IconLink from '../IconLink/IconLink';
import GitHubIconLink from '../IconLink/GitHubIconLink';
import EmailIcon from '../../assets/icons/gmail.png';
import LinkedinIcon from '../../assets/icons/linkedin-logo.png';

function Contacts() {
  return (
    <ContactBox>
      <GitHubIconLink />
      <IconLink
        url="https://www.linkedin.com/in/leticiaoliveiraandrade"
        icon={ LinkedinIcon }
        name="linkedin"
      />
      <IconLink
        url="mailto:leticiaoliveiraandrade@gmail.com"
        icon={ EmailIcon }
        name="email"
      />
    </ContactBox>
  );
}

export default Contacts;
