import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";

const Header = ({ muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Get a life
        </Typography>
        <CreateDialog
          onExerciseCreate={onExerciseCreate}
          muscles={muscles} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
