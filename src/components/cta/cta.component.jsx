import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import { CtaContainer } from "./cta.styles";

const Cta = () => (
  <CtaContainer>
    <div>
      <h2>Boost your links today</h2>
      <CustomButton>Get Started</CustomButton>
    </div>
  </CtaContainer>
);

export default Cta;
