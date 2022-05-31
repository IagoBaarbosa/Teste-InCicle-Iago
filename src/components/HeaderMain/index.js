import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import Cardz from "../Main/Cardz";

function HeaderMain() {
  const dataJson = require("../../assets/data/data.json");
  console.log(dataJson.data);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "35px",
                fontStyle: "normal",
                color: "#707070",
                fontWeight: "300",
                padding: "15px",
              }}
            >
              Endomarketing
            </p>
          </Grid>
          <Grid item xs={6}>
            <BotaoTipo />
          </Grid>
        </Grid>
        {dataJson.data.map((item, index) => {
          return <Cardz item={item} />;
        })}
      </Box>
    </Container>
  );
}
/// nome e botao  //

function BotaoTipo() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90, marginLeft: "38%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">TIPO</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value="age"
          onChange="{handleChange}"
          autoWidth
          label="Age"
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>
            Event
            <CaixaSelecao />
          </MenuItem>
          <MenuItem value={21}>
            Release
            <CaixaSelecao />
          </MenuItem>
          <MenuItem value={22}>
            Publication
            <CaixaSelecao />
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 9, marginLeft: "1%" }}>
        <Button sx={{ m: 0.1, minHeight: 54 }} variant="contained">
          CRIAR +
        </Button>
      </FormControl>
    </div>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function CaixaSelecao() {
  return <Checkbox {...label} />;
}

export default HeaderMain;
