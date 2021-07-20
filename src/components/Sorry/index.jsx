import React from 'react';
import Header from '../Header';
import { MessageContainer, GreyBlock } from './styles';
import { Link } from "react-router-dom";

const Sorry = ({ open, setOpen }) => {
  const height = window.innerHeight;
  return ( 
    <>
    <Header height={height} open={open} setOpen={setOpen}/>
    <MessageContainer id="invite-not-found-container">
      <GreyBlock>
        <h2>Sorry!</h2>
        <p>We couldn't find your invite</p>
        <Link to="/rsvp"><button>Back to RSVP</button></Link>
      </GreyBlock>
      <div id="photocredit">photos by <a href="https://www.kaoverii.com/" rel="noopener noreferrer" target="_blank">Kaoverii Silva</a></div>
    </MessageContainer>
  </>
   );
}
 
export default Sorry;