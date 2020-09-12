import styled from "styled-components";

export const FooterContainer = styled.section`
  background: hsl(255, 11%, 22%);
  padding: 3.5rem;
  color: white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;

  h3 {
    margin-bottom: 1.3rem;
  }

  li {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: hsl(180, 66%, 49%);
    }
  }
`;

export const SocialmediaContainer = styled.div`
  * {
    margin-right: 1.7rem;
    cursor: pointer;
  }

  svg > path:hover {
    fill: hsl(180, 66%, 49%);
  }
`;
