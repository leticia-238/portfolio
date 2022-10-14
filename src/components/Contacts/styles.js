import styled from 'styled-components';

export const ContactBox = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Contact = styled.a`
  width: 32px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ContactIcon = styled.img`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;
