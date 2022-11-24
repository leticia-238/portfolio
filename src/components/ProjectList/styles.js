import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`;

export const Image = styled.img`
  background: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;
  border-radius: inherit;
  margin: 5px 5px 0;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.terciary};
  width: max(30%, 230px);
  aspect-ratio: 3 / 2;
  margin: 5px;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
