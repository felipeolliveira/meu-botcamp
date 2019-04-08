import styled from "styled-components";

const BtnBotcamp = styled.button.attrs({
  children: props => props.content
})`
  width: 280px;
  height: 50px;
  background-color: #ee3e25;
  color: #fff;
  font-size: 20px;
  border-radius: 25px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export default BtnBotcamp;
