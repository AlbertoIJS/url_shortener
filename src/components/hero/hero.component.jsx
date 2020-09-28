import React from 'react';

import {
  HeroContainer,
  TitleContainer,
  LeftSection,
  HeroImg,
} from './hero.styles';

import heroImage from '../../images/illustration-working.svg';

import CustomButton from '../custom-button/custom-button.component';

const Hero = () => (
  <HeroContainer >
    <LeftSection>
      <TitleContainer>More than just shorter links</TitleContainer>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <CustomButton>Get Started</CustomButton>
    </LeftSection>
    <HeroImg>
      <img
        src={heroImage}
        draggable="false"
        alt="Person looking at a screen sitting on a chair"
      />
    </HeroImg>
  </HeroContainer>
);

export default Hero;
