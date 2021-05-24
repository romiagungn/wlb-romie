import React, { useState, useEffect } from "react";
import {
  withStyles,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import { styles } from "./styles";

const Navbar = (props) => {
  const { classes } = props;
  const location = useLocation();
  const path = location.pathname.substr(1).split("/")[0];

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (path === "post") {
      setValue(null);
    }
  }, [path]);

  const _classes = { root: classes.navigation, selected: classes.selected };

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style = {{paddingTop : 14}}
        label="Home"
        classes={_classes}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Create a Post"
        classes={_classes}
        component={Link}
        to="/create"
      />
    </BottomNavigation>
  );
};

export default withStyles(styles, { withTheme: true })(Navbar);
