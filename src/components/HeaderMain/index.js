import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

function HeaderMain() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <p>Endomarketing</p>
            <Cardz />
          </div>
        </Grid>
        <Grid item xs={6}>
          <BotaoTipo />
        </Grid>
      </Grid>
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
/////// Cardz

function Cardz() {
  return (
    <Card sx={{ maxWidth: 999 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="1"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HeaderMain;
