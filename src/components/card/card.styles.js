import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column;
  max-width: 20rem;
  max-height: 23rem;
  padding: 3rem;
  position: relative;
  margin-right: 2rem;

  p {
    font-weight: 500;
    margin-top: 0.5rem;
    color: gray;
    font-size: 0.9rem;
  }

  svg {
    border-radius: 50%;
    width: auto;
    height: auto;
    background: hsl(257, 27%, 26%);
    position: absolute;
    top: -1.5rem;
    left: 3rem;
    padding: 0.6rem;
  }
`;
