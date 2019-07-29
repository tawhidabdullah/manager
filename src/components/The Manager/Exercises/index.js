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

const Index = ({handleExerciseEdit, muscles, exercises, category, onSelect, exercise, handleExerciseDelete, handleSelectEdit, editMode }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <LeftPane
          onselect={onSelect}
          category={category}
          exercises={exercises}
          styles={styles}
          handleDelete={handleExerciseDelete}
          handleSelectEdit={handleSelectEdit}
        />
      </Grid>
      <Grid item sm>
        <RightPane onEdit={handleExerciseEdit} muscles={muscles} exercise={exercise} styles={styles} editMode={editMode} />
      </Grid>
    </Grid>
  );
};

export default Index;
