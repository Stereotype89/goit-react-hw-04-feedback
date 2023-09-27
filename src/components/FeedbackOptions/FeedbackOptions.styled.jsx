import styled from '@emotion/styled';

export const ControlsBox = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: left;
  list-style: none;
`;

export const BtnFeedback = styled.button`
  width: 70px;
  height: 30px;
  font-weight: 700;
  font-family: inherit
  background-color: white;
  color: black;
  border-radius: 4px;
   border: 1px solid;
  transition-property: background-color transition-duration;
  transition-duration: 200ms;
  cursor: pointer;
  &:active, &:hover {
   background-color: #209bd8;
   border-radius: 4px;
   border: 1px solid;
   color: white;
  }
`;
