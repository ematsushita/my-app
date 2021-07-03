import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';
import Header from '../Header';
import img1 from '../../engagement-photos/elissa+matthew-engagement-36_websize.jpg';
import img2 from '../../engagement-photos/elissa+matthew-engagement-131_websize.jpg';
import img3 from '../../engagement-photos/elissa+matthew-engagement-51_websize.jpg';
import img4 from '../../engagement-photos/elissa+matthew-engagement-51_websize_cropped.jpg';

import { 
  InfoContainer,
  InfoBlockContainer,
  TextContainer,
  List, 
  ListItem,
  ImageContainer
 } from './styles';


 // install Swiper modules
SwiperCore.use([Navigation]);


const Info = ({ open, setOpen }) => {
  const height = window.innerHeight;

  return ( 
    <>
    <Header height={height} open={open} setOpen={setOpen}/>
    <InfoContainer id="info-container">
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <InfoBlockContainer textAlign="left">
            <ImageContainer id="image-1">
              <img src={img1} alt="elissa + matthew wedding" />
            </ImageContainer>
            <TextContainer>
              <h2>the wedding</h2>
              <p><span>date: </span>October 1, 2021</p>
              <p><span>location: </span>Stanley Park Pavilion, 610 Pipeline Rd</p>
              <p><span>ceremony: </span>4pm</p>
              <p><span>reception: </span>6pm</p>
              <p><span>directions: </span></p>
              <List>
                <ListItem><span>From Georgia Street...</span> enter Stanley Park and continue straight through the round-about. Take your first right after the Stanley Park Pavilion sign with the large red rose, which will swing left and bring you to the Pavilion.</ListItem>
                <ListItem><span>From English Bay...</span> enter Stanley Park via Beach Avenue. Turn right onto North Lagoon Drive (at Second Beach). Once past the lagoon, take a left at the stop sign and continue left through the round-about and take your first right after the “Stanley Park Pavilion” sign with the large red rose, which will swing left and bring you to the Pavilion.</ListItem>
              </List>
            </TextContainer>
        </InfoBlockContainer>
        </SwiperSlide>
        <SwiperSlide>
          <InfoBlockContainer textAlign="left" id="last-block">
            <ImageContainer id="image-3">
              <img src={img2} alt="elissa + matthew wedding"/>
            </ImageContainer>
            <TextContainer>
              <h2>what to eat</h2>
              <p><span>italian</span></p>
              <List>
                <ListItem><a href="http://www.saviovolpe.com/" rel="noopener noreferrer" target="_blank">Savio Volpe</a> - rustic fare in the Italian tradition of freshness and regionality, using locally sourced ingredients.</ListItem>
                <ListItem><a href="https://www.cioppinosyaletown.com/" rel="noopener noreferrer" target="_blank">Cioppino's</a> - award-winning, upscale Mediterranean grill & enoteca.</ListItem>
                <ListItem><a href="https://www.askforluigi.com/" rel="noopener noreferrer" target="_blank">Ask for Luigi</a> - a casual and intimate Italian-inspired restaurant, specializing in fresh hand made pasta.</ListItem>
              </List>
              <p><span>sushi/seafood</span></p>
              <List>
                <ListItem><a href="https://www.kishimotorestaurant.com/" rel="noopener noreferrer" target="_blank">Kishimoto</a> - pro tip: make a reservation well in advance if you choose to go.</ListItem>
                <ListItem><a href="https://www.bluewatercafe.net/" rel="noopener noreferrer" target="_blank">Blue Water Cafe</a> - upscale restaurant in the heart of Yaletown. their seafood tower is a must!</ListItem>
                <ListItem><a href="https://www.octopusgarden-canada.com/" rel="noopener noreferrer" target="_blank">Octopus's Garden</a> - whimsical Japanese fare using choice fish, with premium wine & sake options.</ListItem>
              </List>
              <p><span>fusion/misc.</span></p>
              <List>
                <ListItem><a href="http://www.phnompenhrestaurant.ca/" rel="noopener noreferrer" target="_blank">Phnom Penh</a> - vietnamese/cambodian restaurant serving up chicken wings and butter beef to die for.</ListItem>
                <ListItem><a href="http://www.kissatanto.com/" rel="noopener noreferrer" target="_blank">Kissa Tanto</a> - one of Elissa's favourite spots serving Japanese/Italian fusion.</ListItem>
              </List>
            </TextContainer>
          </InfoBlockContainer>
        </SwiperSlide>
        <SwiperSlide>
          <InfoBlockContainer textAlign="left" id="last-block">
            <ImageContainer id="image-3">
              <img src={img3} alt="elissa + matthew wedding"/>
            </ImageContainer>
            <TextContainer>
              <h2>things to do</h2>
              <p><span>sightseeing</span></p>
              <List>
                <ListItem><a href="https://www.capbridge.com/" rel="noopener noreferrer" target="_blank">Capilano Suspension Bridge</a> - one of the most popular tourist attractions located in North Vancouver.</ListItem>
                <ListItem><a href="https://vandusengarden.org/" rel="noopener noreferrer" target="_blank">Van Dusen Gardens</a> - a 55-acre oasis in the heart of Vancouver with over 7,500 plant species and varieties from around the world.</ListItem>
              </List>
              <p><span>activities</span></p>
              <List>
                <ListItem><a href="https://www.vanaqua.org/" rel="noopener noreferrer" target="_blank">Vancouver Aquarium</a> -  in addition to being a major tourist attraction, the aquarium is a centre for marine research, ocean literacy education, conservation and marine animal rehabilitation.</ListItem>
                <ListItem><a href="https://granvilleisland.com/" rel="noopener noreferrer" target="_blank">Granville Island</a> - a peninsula and shopping district located across False Creek from Downtown Vancouver.</ListItem>
              </List>
              <p><span>explore</span></p>
              <List>
                <ListItem><a href="https://www.grousemountain.com/" rel="noopener noreferrer" target="_blank">Grouse Mountain</a> - drive up to this 1,200-metre mountain offering various activities plus sweeping views of Vancouver.</ListItem>
                <ListItem><a href="https://vancouver.ca/parks-recreation-culture/seawall.aspx" rel="noopener noreferrer" target="_blank">Vancouver Seawall</a> - the world's longest uninterrupted waterfront path - perfect for a walk, cycle or jog.</ListItem>
              </List>
            </TextContainer>
          </InfoBlockContainer>
        </SwiperSlide>
      </Swiper>
    </InfoContainer>
    </>
   );
}
 
export default Info;