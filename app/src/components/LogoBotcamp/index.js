import styled from "styled-components";

import logo from "../../img/botcamp.svg";

const LogoBotcamp = styled.img.attrs({
  src: logo,
  alt: "Logo do Botcamp",
  title: "Botcamp"
})`
  width: ${props => props.width};
`;

export default LogoBotcamp;
