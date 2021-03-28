import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderContainer, 
  MenuButton,
  ExitButton,
  Menu,
  MenuItem,
  InitialContainer
} from './styles';

const Header2 = ({ height }) => {
  const [open, setOpen] = useState(false);
  const isHomePage = (window.location.pathname === '/my-app/') || (window.location.pathname === '/my-app');

  const onClick = () => {
    setOpen(!open);
  };

  return ( 
    <HeaderContainer id="header-container" isHomePage={isHomePage}>
      { !isHomePage && (
        <InitialContainer>
          m + e
        </InitialContainer>
      )}
      <CSSTransition
        in={open}
        timeout={400}
        classNames="menu-transition"
        unmountOnExit
        appear
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <Menu id="menu" open={open} height={height} isHomePage={isHomePage}>
          <Link to="/my-app/rsvp" onClick={() => onClick()}><MenuItem>rsvp</MenuItem></Link>
          <Link to="/my-app/info" onClick={() => onClick()}><MenuItem>info</MenuItem></Link>
          <Link to="/my-app/photos" onClick={() => onClick()}><MenuItem>photos</MenuItem></Link>
        </Menu>
      </CSSTransition>
      <MenuButton onClick={() => onClick()} open={open}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
        />
      </MenuButton>
      <ExitButton onClick={() => onClick()} open={open}>
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
        />
      </ExitButton>
    </HeaderContainer>
   );
}
 
export default Header2;