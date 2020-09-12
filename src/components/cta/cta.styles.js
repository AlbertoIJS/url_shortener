import styled from "styled-components";
import background from "../../images/bg-boost-desktop.svg";

export const CtaContainer = styled.section`
  background: hsl(257, 27%, 26%) url(${background}) center center/cover;
  color: white;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div button {
    margin: 1rem auto 0 auto;
  }
`;
