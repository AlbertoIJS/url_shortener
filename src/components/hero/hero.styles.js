import styled from "styled-components";

export const HeroContainer = styled.main`
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  align-content: center;
  text-align: left;
`;

export const TitleContainer = styled.h1`
  font-size: 4.5rem;
`;

export const LeftSection = styled.div`
  max-width: 40rem;
  * {
    margin-top: 1rem;
  }
  h1 {
    margin-top: 4rem;
    color: hsl(255, 11%, 22%);
  }

  p {
    color: hsl(0, 0%, 75%);
  }
`;
