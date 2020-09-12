import styled, { css } from 'styled-components';

const DefaultButton = css`
  border-radius: 1.5rem;
`;

const LoginButton = css`
  background-color: white;
  color: hsl(0, 0%, 75%);
`;

const SquareButton = css`
  border-radius: 0.3rem;
`;

const getButtonStyles = (props) => {
  if (props.square) return SquareButton;
  return props.login ? LoginButton : DefaultButton;
};

export const CustomButtonContainer = styled.button`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.2rem;

  &:hover {
    opacity: 0.6;
  }

  ${getButtonStyles}
`;
