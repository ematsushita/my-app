import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  background: white;
  height: 100vh;
  padding: 0;
`;

export const GreyBlock = styled.div`
  height: 175px;
  width: 100%;
  background-color: #EFEEEC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > h2 {
    padding-top: 20px;
    font-size: 2rem;
    margin-bottom: 0 !important;
    font-weight: 300;
    letter-spacing: 2px;
  }
  > p {
    font-weight: 200;
  }
  @media(min-width: 768px) {
    height: 200px;
  }
  @media(min-width: 1024px) {
    height: 300px;
  }
`;

export const WelcomeInnerContainer = styled.div`
  background-color: white;
  padding: 30px 0px;
  width: 80%;
  min-height: 150px;
  @media(min-width: 768px) {
    padding: 60px 80px;
    width: 60%;
    margin: -50px auto 30px auto;
  }
  @media(min-width: 1024px) {
    margin: -125px auto 30px auto;
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  letter-spacing: 1.5px;
  .light {
    font-weight: 200;
    line-height: 20px;
  }
`;
