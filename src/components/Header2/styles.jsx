import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: transparent;
  height: 120px;
  width: 100%;
  position: relative;
  text-align: center;
  border-bottom: 'none';
  .menu-transition-enter {
    opacity: 0;
  }
  .menu-transition-enter-active {
    opacity: 0.8;
    transition: opacity 1000ms;
  }
  .menu-transition-exit {
    opacity: 0.8;
  }
  .menu-transition-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export const MenuButton = styled.button`
  color: ${props => (props.open ? 'transparent' : 'black')};
  position: absolute;
  background-color: transparent;
  border: none;
  right: 20px;
  top: 20px;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const ExitButton = styled.button`
  z-index: 11;
  color: ${props => (props.open ? 'black' : 'transparent')};
  position: absolute;
  background-color: transparent;
  border: none;
  right: 20px;
  top: 20px;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const Menu = styled.div`
  z-index: 10;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: 0.7;
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: calc(${props => props.height}px - 5px);
  background: white;
  padding: 20px;
  justify-content: center;
`;

export const MenuItem = styled.div`
  border-bottom: 2px solid transparent;
  display: inline-block;
  color: #5e5b56;
  margin: 20px 20px;
  &:hover {
    border-bottom: 2px solid #FFDAB9;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const InitialContainer = styled.div`
  font-size: 3rem;
  padding-top: 2rem;
  font-weight: 200;
  @media(min-width: 768px) {
    font-size: 5rem;
    padding-top: 0;
  }
`;
