import styled from "styled-components";

import logo from "../../img/botcamp-chat.svg";

const HeaderLogo = styled.img.attrs({
  src: logo,
  alt: "Logo do Botcamp"
})`
  width: 200px;
`;

export default HeaderLogo;
