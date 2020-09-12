import React from "react";

import { CardContainer } from "./card.styles";

const Card = ({ children, ...props }) => (
  <CardContainer {...props}>{children}</CardContainer>
);

export default Card;
