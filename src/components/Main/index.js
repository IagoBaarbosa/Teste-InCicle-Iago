import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeaderMain from "../HeaderMain";
import MainRight from "../MainRight";
import { Container } from "@mui/system";

function Main() {
  return (
    <Container>
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
    </Container>
  );
}

export default Main;
