import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  box-shadow: ${({ theme }) => theme.colors.bg_shadow};
  padding: 5px;
  justify-content: center;
`;

export const NavTab = styled.div`
  padding: 8px 10px;
  border-radius: 8px;
  margin: 0 6px;
  flex-grow: 1;
  text-align: center;
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
