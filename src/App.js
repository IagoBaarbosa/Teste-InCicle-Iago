import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/index";
import Main from "./components/Main";

function App() {
  return (
    <>
      <h1>
        <Header />
        <Main />
        <Footer />
      </h1>
    </>
  );
}

export default App;
