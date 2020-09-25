import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  button {
    width: 100%;
  }
  img {
    align-self: flex-start;
  }
  @media screen and (min-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 992px) {
    width: unset;
    div {
      display: none;
    }
  }
`;
export const Menu = styled.div`
  margin: auto 0;
  div {
    width: 20px;
    height: 3px;
    background-color: hsl(0, 0%, 75%);
  }
  div + div {
    margin-top: 0.35rem;
  }
`;
export const Logo = styled.img`
  width: 121px;
  height: 33px;
`;

export const NavContainer = styled.nav`
  background-color: hsl(257, 27%, 26%);
  width: 90%;
  padding: 9%;
  border-radius: 0.5rem;
  position: absolute;
  top: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  li {
    margin-bottom: 1.3rem;
  }
  li > a {
    color: white;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    background-color: white;
    width: 100%;
    border-radius: unset;
    position: unset;
    padding: unset;
    li {
      margin: unset;
    }
    li > a {
      color: hsl(0, 0%, 75%);
    }
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.1px solid gray;
  @media screen and (min-width: 922px) {
    flex-direction: row;
    font-size: 0.85rem;
    border-bottom: none;
    a {
      margin: 0 2.5rem;
    }
    width: unset;
  }
`;

export const Section = styled.li`
  display: flex;
  font-weight: 700;
  a {
    color: white;
    text-decoration: none;
    color: hsl(0, 0%, 75%);
    @media screen and (min-width: 922px) {
      &:hover {
        color: hsl(255, 11%, 22%);
      }
    }
  }
`;

export const LoginAndSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  button {
    margin-top: 0.2rem;
    font-size: 0.9rem;
    color: white;
  }
  @media screen and (min-width: 922px) {
    flex-direction: row;
    button:first-child {
      margin-right: 0.7rem;
      color: gray;
    }
    button {
      font-size: 0.8rem;
    }
    width: 20%;
  }
`;
