import React from "react";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { styles } from "./styles";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.root} elevation={0}>
      <div className={classes.headerWrapper}>
        <div className={classes.headerInner}>
          <Link to="/" className={classes.title}>
            <span>Wlb Test</span>
          </Link>
          <div className={classes.subtitle}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              tellus vitae.
            </span>
          </div>
        </div>
        <Navbar />
      </div>
      <div className={classes.container}>{children}</div>
      <div className={classes.footer}>Created By Romie Agung Nugraha @2021</div>
    </div>
  );
};

export default withStyles(styles)(Layout);
