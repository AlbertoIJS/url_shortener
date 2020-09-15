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
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  border-radius: 0.5rem;
  padding: 2rem;
`;
export const Inputshortener = styled.input`
  width: 95%;
  padding: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid hsl(0, 0%, 75%);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  &::placeholder {
    color: hsl(0, 0%, 75%);
    font-weight: 700;
  }
`;

export const ShortenedContainer = styled.div`
  max-width: 50%;
  padding: 0.5rem 1rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.3rem;
  > a {
    color: hsl(180, 66%, 49%);
    text-decoration: none;
  }
`;

export const DisplayError = styled.small`
  color: #f46262;
  position: absolute;
  padding-top: 0.2rem;
  display: block;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  font-size: 0.8rem;
  font-style: italic;
`;
