import styled from 'styled-components';

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gradient_primary};
  margin: 20px 10px;
  padding: 10px;
`;
