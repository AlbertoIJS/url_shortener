import React from "react";

import {
  HeaderContainer,
  NavContainer,
  ListContainer,
  Section,
  LoginAndSignUp,
} from "./header.styles";

import { ReactComponent as Logo } from "../../images/logo.svg";

import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo />
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
      </NavContainer>

      <LoginAndSignUp>
        <CustomButton login>Login</CustomButton>
        <CustomButton>Sign Up</CustomButton>
      </LoginAndSignUp>
    </HeaderContainer>
  );
};

export default Header;
