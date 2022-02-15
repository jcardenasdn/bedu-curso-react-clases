import React, { Fragment } from "react";
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core";
import "../index.css"

const GridComp = () => {
  return (
    <Fragment>
      <Container className="container">
        <Grid container spacing={4}>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 1</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 2</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 3</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 4</Grid>
          <Grid className="gridItem" item sm={6} xs={12}>
            Grid item container
            <Grid container>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <div className="anidado">Grid 5</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default GridComp;