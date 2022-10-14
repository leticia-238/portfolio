import { Contact, ContactBox, ContactIcon } from './styles';

function Contacts() {
  return (
    <ContactBox>
      <Contact href="https://github.com/leticia-238" target="_blank">
        <ContactIcon src="./" alt="icon" />
        github
      </Contact>
      <Contact href="https://www.linkedin.com/in/leticiaoliveiraandrade" target="_blank">
        <ContactIcon src="./" alt="icon" />
        linkedin
      </Contact>
      <Contact href="mailto:leticiaoliveiraandrade@gmail.com">
        <ContactIcon src="./" alt="icon" />
        email
      </Contact>
    </ContactBox>
  );
}

export default Contacts;
