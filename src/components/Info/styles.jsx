import styled from 'styled-components';
import img from '../../engagement-photos/elissa+matthew-engagement-131_websize.jpg';

export const InfoContainer = styled.div`
  .swiper-button-next, .swiper-button-prev {
    color: #FFDAB9;
  }
  background: white;
  min-height: 100vh;
  padding: 0 5px;
  @media(min-width: 768px) {
    padding: 0 20px;
  }
  }
`;

export const InfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    flex-direction: row-reverse;
    text-align: ${props => props.textAlign};
  }
`;

export const TextContainer = styled.div`
  // width: 80%;
  padding: 0 50px;
  // @media(min-width: 1024px) {
  //   width: 50%;
  // }
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
  > img {
    width: 100%;
    margin-bottom: 2rem;
    @media(min-width: 1024px) {
      width: inherit;
      margin-bottom: 0;
      height: 400px;
      padding-right: 50px;
    }
  }
`;
