import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";

import { styles } from "./styles";

const ContentWrapper = (props) => {
  const { classes, children } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ContentWrapper);
