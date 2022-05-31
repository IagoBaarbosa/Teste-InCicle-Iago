import React from "react";
import logo from "../../assets/image/logo.png";

import { HeaderContainer } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da InCicle" />
    </HeaderContainer>
  );
}

export default Header;
