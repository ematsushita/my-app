import React from 'react';
import Header from '../Header';
import { MessageContainer, GreyBlock } from './styles';

const Error = ({ open, setOpen }) => {
  const height = window.innerHeight;

  return ( 
    <>
    <Header height={height} open={open} setOpen={setOpen} />
    <MessageContainer id="thank-you-container">
      <GreyBlock>
        <h2>You've already submitted your RSVP!</h2>
        <p>please contact Matt or Elissa if you'd like to modify your response.</p>
      </GreyBlock>
    </MessageContainer>
  </>
   );
}
 
export default Error;