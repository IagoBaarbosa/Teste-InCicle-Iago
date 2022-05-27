import React from "react";
import Box from "@mui/material/Box";
import { MainContainer } from "./Main.style";

function Main({ children }) {
  return (
    <MainContainer gutter="30px" container="1230px">
      {children}
    </MainContainer>
  );
}

export default Main;
