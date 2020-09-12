import React from "react";

import { HeroContainer, TitleContainer, LeftSection } from "./hero.styles";

import { ReactComponent as HeroImage } from "../../images/illustration-working.svg";

import CustomButton from "../custom-button/custom-button.component";

const Hero = () => (
  <HeroContainer>
    <LeftSection>
      <TitleContainer>More than just shorter links</TitleContainer>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <CustomButton>Get Started</CustomButton>
    </LeftSection>

    <HeroImage />
  </HeroContainer>
);

export default Hero;
