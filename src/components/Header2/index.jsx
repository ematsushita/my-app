import React from 'react';
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

const Header2 = ({ height, open, setOpen }) => {

  const onClick = () => {
    setOpen(!open);
  };

  return ( 
    <HeaderContainer id="header-2-container">
      <CSSTransition
        in={open}
        timeout={400}
        classNames="menu-transition"
        unmountOnExit
        appear
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <Menu id="menu" open={open} height={height}>
          <Link to="/home" onClick={() => onClick()}><MenuItem>home</MenuItem></Link>
          <Link to="/rsvp" onClick={() => onClick()}><MenuItem>rsvp</MenuItem></Link>
          <Link to="/info" onClick={() => onClick()}><MenuItem>info</MenuItem></Link>
          <Link to="/photos" onClick={() => onClick()}><MenuItem>photos</MenuItem></Link>
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