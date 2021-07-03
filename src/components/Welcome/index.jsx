import React from 'react';
import Header from '../Header';
import { WelcomeContainer, GreyBlock, WelcomeInnerContainer, TextContainer } from './styles';

const Welcome = ({ open, setOpen }) => {
  const height = window.innerHeight;

  return (
    <>
    <Header height={height} open={open} setOpen={setOpen} />
    <WelcomeContainer id="welcome-container">
      <GreyBlock>
        <h2>WELCOME</h2>
        <p>we're getting married!</p>
      </GreyBlock>
      <WelcomeInnerContainer>
        <TextContainer>
          <p>dear friends & family,</p>
          <p className="light">
            we’re so excited to celebrate this next chapter in our lives with you. you’ll find all the details throughout our site including a place you can RSVP online, and a list of a few of our favorite restaurants and activities around town. we can’t wait to see you in October, and thank you for all your love and support! see you then!
          </p>
          <p>love, matthew & elissa</p>
        </TextContainer>
      </WelcomeInnerContainer>
    </WelcomeContainer>
    </>
   );
}
 
export default Welcome;