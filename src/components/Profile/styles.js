import styled from 'styled-components';

export const Name = styled.h1`
  font-size: 1.4rem;
  width: 100%;
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  width: 100%;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  margin: 10px 0;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gradient_primary};
  margin: 20px 10px;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
`;
