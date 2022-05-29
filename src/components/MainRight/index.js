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
  return (
    <>
      <Container>
        <BoxTitle>
          <Title>Endomarketing</Title>
        </BoxTitle>
        <Text>
          Endomarketing está relacionada às ações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para clente.
          Marketing interno, devido ao nome é usualmente confundido com
          Endomarketing mesmo sendo conceitos diferentes.
        </Text>
        <br></br>
        <button type="button">DISPENSAR</button>
      </Container>
      <Container>
        <BoxTitle>
          <Title>Quadros de gestao a vista</Title>
        </BoxTitle>
        <Text>Demonstraçao comercial</Text>
        <img src={logo} alt="Logo da InCicle" width={100} />
      </Container>
    </>
  );
}

export default MainRight;
