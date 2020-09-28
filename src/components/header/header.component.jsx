import React, { useState, useRef } from 'react';

import {
  HeaderContainer,
  NavContainer,
  ListContainer,
  Section,
  LoginAndSignUp,
  Logo,
  Menu,
  Hamburger,
} from './header.styles';

import logo from '../../images/logo.svg';
import CustomButton from '../custom-button/custom-button.component';

const Header = () => {
  const [click, setClick] = useState(true);
  const dropDown = useRef();

  const handleClick = () => {
    setClick(!click);

    if (click) {
      dropDown.current.style.display = 'block';
    } else {
      dropDown.current.style.display = 'none';
    }
  };
  return (
    <HeaderContainer >
      <Hamburger>
        <Logo src={logo} alt="Shortly logo" />
        <Menu onClick={() => handleClick()}>
          <div></div>
          <div></div>
          <div></div>
        </Menu>
      </Hamburger>
      <NavContainer ref={dropDown} >
        <ListContainer>
          <Section>
            <a href="#features">Features</a>
          </Section>
          <Section>
            <a href="#pricing">Pricing</a>
          </Section>
          <Section>
            <a href="#resources">Resources</a>
          </Section>
        </ListContainer>
        <LoginAndSignUp>
          <CustomButton login>Login</CustomButton>
          <CustomButton>Sign Up</CustomButton>
        </LoginAndSignUp>
      </NavContainer>
    </HeaderContainer>
  );
};
export default Header;
