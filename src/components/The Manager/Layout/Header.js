import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/create";

const Header = () => {
  return (
    <AppBar  position="static" color="primary">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{flex: 1}}>
          Get a life
        </Typography>
        <CreateDialog/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
