import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BoxTitle, Title, Text, Container } from "./styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Public } from "@mui/icons-material";

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

function BoxDireitaCima(props) {
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
          background: "#F2F3F5",
          margin: "80px",
          height: "230px",
        }}
      >
        <br></br>
        <Title>Quadros de gestao a vista</Title>
        {management.data[0].boards.map((item, index) => {
          return <BoxBaixo2 item={item} />;
        })}
      </Container>
    </>
  );
}

function BoxBaixo2(props) {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "300",
        fontStyle: "normal",
        color: "#707070",
      }}
    >
      <p>
        {props.item.title}

        <Public fontSize="small" />
        <MoreHorizIcon style={{ position: "absolute" }} />
        <br></br>
        {props.item.resume_files.map((item2) => {
          return (
            <img src={item2.file} alt="img" width={84} height={90} border={1} />
          );
        })}
      </p>
    </div>
  );
}

export default MainRight;
