import styled from 'styled-components';

const NavLink = styled.a`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  background: ${(props) => props.theme.colors.primary};
`;

export default NavLink;
