import styled from 'styled-components';

export const HeroContainer = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  overflow-x:hidden;
  @media screen and (min-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
    margin: 4rem 0 0 8rem;
    align-content: center;
    text-align: left;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  color: hsl(255, 11%, 22%);
  @media screen and (min-width: 992px) {
    font-size: 7rem;
    line-height: 7rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-top: 2rem;
  * {
    margin-top: 1rem;
  }

  button {
    align-self: center;
    padding: 0.8rem 2.5rem;

  @media screen and (min-width: 992px) {
    align-self: flex-start; 
  }
  }

  p {
    color: gray; 
    font-size: 1.8rem;
    max-width: 80%;
  }
`;

export const HeroImg = styled.div`
  width: 30rem;
  img {
  margin-left: 20%;
  width: 100%;
  }

  @media screen and (min-width:992px) {
    width: 50%;
    margin-right: 0;
    img {
      position: relative;
      left: 10%; 
    }
  }
`;
