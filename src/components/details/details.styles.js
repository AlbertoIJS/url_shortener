import styled, { css } from "styled-components";
import Card from "../card/card.component";

export const DetailsContainer = styled.section`
  background: #f0f1f6;
  margin-top: 8rem;
`;

export const IconContainer = styled.div`
  background: hsl(257, 27%, 26%);
  border: none;
  display: flex;
  place-items: center;
  position: absolute;
  top: -2.5rem;
  border-radius: 3rem;
  padding: 1.2rem;
  margin-bottom: 2rem;
`;

export const CardTitle = styled.h3`
  margin-top: 1rem;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 5rem 0;

  h1 {
    color: hsl(255, 11%, 22%);
    font-size: 2.5rem;
  }

  p {
    color: gray;
    margin-top: 1rem;
    max-width: 40rem;
    text-align: center;
    font-size: 1rem;
  }
`;

export const BlueHr = styled.hr`
  position: relative;
  width: 40rem;
  top: 11rem;
  border: 0.18rem solid hsl(180, 66%, 49%);
  background-color: hsl(180, 66%, 49%);
  margin: auto;
`;

const m4 = css`
  top: 3rem;
`;

const m6 = css`
  top: 6rem;
`;

const getMarginTop = (props) => (props.m4 ? m4 : m6);

export const CardContainer = styled(Card)`
  position: relative;
  ${getMarginTop};
`;

export const CardsContainer = styled.div`
  display: flex;
  padding: 1rem 0 13rem 0;
  justify-content: center;
  align-content: center;
`;
