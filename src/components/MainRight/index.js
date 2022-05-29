import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BoxTitle, Title, Text, Container } from "./styles";
import logo from "../../assets/image/logo.png";

function MainRight() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BoxDireitaCima />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}

function BoxDireitaCima() {
  const management = require("../../assets/data/management.json");
  console.log(management.data);
  return (
    <>
      <Container
        style={{
          margin: "80px",
          height: "350px",
        }}
      >
        <BoxTitle>
          <Title>Endomarketing</Title>
        </BoxTitle>
        <Text>
          Endomarketing está relacionada às ações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para clente.
          Marketing interno, devido ao nome é usualmente confundido com
          Endomarketing mesmo sendo conceitos diferentes.
          <button type="button">DISPENSAR</button>
        </Text>
      </Container>

      <Container
        style={{
          background: "#FFF",
          margin: "80px",
          height: "230px",
        }}
      >
        <BoxTitle>
          <Title>Quadros de gestao a vista</Title>
        </BoxTitle>
        <div>
          <Text>Demonstraçao comercial</Text>
          <br></br>
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
        </div>
        <div>
          <Text>Demonstraçao comercial</Text>
          <br></br>
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
        </div>
        <div>
          <Text>Demonstraçao comercial</Text>
          <br></br>
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
          <img src={logo} alt="Logo da InCicle" width={90} />
        </div>
      </Container>
    </>
  );
}

export default MainRight;
