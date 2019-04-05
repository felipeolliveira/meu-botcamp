import styled from "styled-components";

const InputUser = styled.input.attrs({
  placeholder: "Diz aí"
})`
  border: none;
  background-color: transparent;
  font-size: 20px;
  line-height: 40px;
  color: #333;

  ::placeholder,
  ::-moz-placeholder,
  ::-webkit-placeholder {
    color: #a8a8a8;
    opacity: 1;
  }
`;

export default InputUser;
