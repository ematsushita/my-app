import React from 'react';
import Header2 from '../Header2';
import { 
  HomeContainer,
  TitleContainer,
  DateContainer
 } from './styles';

const Home = ({ open, setOpen }) => {
  const height = window.innerHeight;

  return ( 
    <React.Fragment>
      <Header2 height={height} open={open} setOpen={setOpen} />
      <HomeContainer id="home-container">
        <DateContainer>10.01.2021</DateContainer>
        <TitleContainer>MATTHEW & ELISSA</TitleContainer>
      </HomeContainer>
      <div id="photocredit">photos by <a href="https://www.kaoverii.com/" rel="noopener noreferrer" target="_blank">Kaoverii Silva</a></div>
    </React.Fragment>
   );
}
 
export default Home;