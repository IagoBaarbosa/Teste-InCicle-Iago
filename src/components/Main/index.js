import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import HeaderMain from "../HeaderMain";
import MainRight from "../MainRight";

function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>
            <HeaderMain />
          </div>
        </Grid>
        <Grid item xs={4}>
          <MainRight />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
