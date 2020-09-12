import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.nav`
  display: flex;
`;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  a {
    margin: 0 2.5rem;
  }
`;

export const Section = styled.li`
  display: flex;
  font-weight: 700;
  a {
    text-decoration: none;
    color: hsl(0, 0%, 75%);

    &:hover {
      color: hsl(255, 11%, 22%);
    }
  }
`;

export const LoginAndSignUp = styled.div`
  display: flex;

  button:first-child {
    margin-right: 0.7rem;
  }
`;
