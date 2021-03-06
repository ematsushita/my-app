import styled from 'styled-components';
import img from './engagement-photos/elissa+matthew-engagement-5.jpg';

export const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: white;
`;

export const MainContainer = styled.div`
  position: relative;
  min-height: 100%;
  ${(props) => {
    if (props && props.homePage) {
      return `
        background: url(${img}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-attachment: fixed;
      `
    }
    return '';
  }}
  #photocredit {
    width: 100%;
    position: absolute;
    bottom: 8px;
    color: #444444;
    text-align: center;
    @media(min-width: 1024px) {
      bottom: 20px;
    }
    > a {
      link-stye: none;
      color: #444444;
    }
  }
`;