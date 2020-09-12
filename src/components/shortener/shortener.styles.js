import styled from 'styled-components';
import background from '../../images/bg-shorten-desktop.svg';

export const UrlShortenerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
  position: relative;
  bottom: 3.5rem;
`;

export const ShortenerContainer = styled.div`
  background: hsl(257, 27%, 26%) url(${background}) center center/cover;
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 50%;
  border-radius: 0.5rem;
`;
export const Inputshortener = styled.input`
  margin-right: 2rem;
  padding: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid hsl(0, 0%, 75%);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-align: left;
  width: 80%;
  &::placeholder {
    color: hsl(0, 0%, 75%);
    font-weight: 700;
  }
`;

export const ShortenedContainer = styled.div`
  max-width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: white;
  border-radius: 0.3rem;
  > a {
    color: hsl(180, 66%, 49%);
    text-decoration: none;
  }
`;

export const DisplayError = styled.small`
  display: block;
  color: red;
  font-size: 0.8rem;
`;
