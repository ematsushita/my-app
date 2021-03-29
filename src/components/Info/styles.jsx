import styled from 'styled-components';
import img from '../../engagement-photos/elissa+matthew-engagement-131_websize.jpg';

export const InfoContainer = styled.div`
  background: white;
  height: 100vh;
  padding: 0 30px;
  #ipad-image {
    max-width: 100%;
    @media(min-width: 1024px) {
      display: none;
    }
  }
`;

export const InfoBlockContainer = styled.div`
  display: flex;
  text-align: left;
  padding: 30px 0;
  > div > h2 {
    margin: 0;
    font-size: 3rem;
    font-weight: 100;
  }
  > div > p {
    font-weight: 200;
    margin: 0.5rem 0;
    > span {
      font-weight: 400;
    }
  }
  @media(min-width: 1024px) {
    text-align: ${props => props.textAlign};
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  padding: 0 20px;
  @media(min-width: 1024px) {
    width: 50%;
  }
`;

export const List = styled.ul`
  margin-top: 0.5rem;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 0.9rem;
  font-weight: 200;
  >span {
    font-weight: 300;
  }
  >a{
    text-decoration: none;
    font-weight: 400;
    color: #5e5b56;
    &:hover {
      color: #FFDAB9;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: none;
  > img {
    height: 300px;
  }
  @media(min-width: 1024px) {
    display: block;
  }
`;
