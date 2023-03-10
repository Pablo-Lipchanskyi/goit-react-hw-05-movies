import styled from 'styled-components';

export const ButtonStyled = styled.button`
  /* display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &: hover {
    opacity: 1;
  } ; */
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 40px;
  height: 40px; */
  padding: 2px 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  fill: #ffffff;
  background-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  &:hover,
  &:focus {
    background-color: #616161;
  }
`;