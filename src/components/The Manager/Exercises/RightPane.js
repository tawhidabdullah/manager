import React from "react";
import { Paper, Typography } from "@material-ui/core";

const RightPane = ({
  styles,
  exercise: {
    title = "WELCOME!",
    description = "Please select and exercise from the left"
  }
}) => {
  return (
    <Paper style={styles.Paper}>
      <Typography variant="h4">{title}</Typography>
      <Typography style={{ marginTop: 20 }} variant="subtitle2">
        {description}
      </Typography>
    </Paper>
  );
};

export default RightPane;
