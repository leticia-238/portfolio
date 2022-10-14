import styled from 'styled-components';

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  box-shadow: ${({ theme }) => theme.colors.bg_shadow};
  padding: 5px 5px 0;
  justify-content: center;
`;

export const Link = styled.a`
  padding: 8px 10px;
  border-radius: 8px 8px 0 0;
  margin: 0 6px;
  text-decoration: none;
  color: ${({ active, theme }) => (
    active ? theme.colors.bg : theme.colors.primary
  )};
  background: ${({ active, theme }) => (
    active ? theme.colors.primary : theme.colors.bg
  )};
  
  &:hover {
    color: ${({ theme }) => theme.colors.bg};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
