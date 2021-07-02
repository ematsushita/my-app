import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 15% auto 0 auto;
`;

export const TitleContainer = styled.div`
  font-size: 1rem;
  color: white;
  opacity: 0.7;
  letter-spacing: 8px;
  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;

export const DateContainer = styled.div`
  font-size: 2rem;
  color: white;
  opacity: 0.7;
  letter-spacing: 12px;
  @media(min-width: 768px) {
    font-size: 6rem
  }
`;
