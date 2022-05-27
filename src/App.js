import * as React from "react";
import Header from "./components/Header";
import Button from "@mui/material/Button";
import Main from "./components/Main";
import Footer from "./components/Footer/index";
import { BoxRight } from "./components/BoxRight";

function App() {
  return (
    <>
      <h1>
        <Header />
        <Main>
          <BoxRight />
        </Main>
        <Footer />
      </h1>
    </>
  );
}

export default App;
