import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Cardz from "../Main/Cardz";

function HeaderMain() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <p>Endomarketing</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <BotaoTipo />
        </Grid>
      </Grid>
      <Cardz />
      <br />
      <Cardz />
      <br />
      <Cardz />
      <br />
      <Cardz />
      <br />
      <Cardz />
      <br />
      <Cardz />
    </Box>
  );
}
/// nome e botao  //

function BotaoTipo() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90, marginLeft: "40%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">TIPO</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value="age"
          onChange="{handleChange}"
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 90, marginLeft: "1%" }}>
        <Button sx={{ m: 1, minWidth: 90 }} variant="contained">
          CRIAR +
        </Button>
      </FormControl>
    </div>
  );
}

export default HeaderMain;
