import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Index = ({ exercises, category, onSelect, exercise }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <LeftPane
          onselect={onSelect}
          category={category}
          exercises={exercises}
          styles={styles}
        />
      </Grid>
      <Grid item sm>
        <RightPane exercise={exercise} styles={styles} />
      </Grid>
    </Grid>
  );
};

export default Index;
