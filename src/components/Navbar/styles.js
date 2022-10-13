import styled from 'styled-components';

export const Container = styled.nav`
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
`;

export const Link = styled.a`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  background: ${(props) => props.theme.colors.primary};
`;
