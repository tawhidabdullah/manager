import React from "react";
import { Paper, Typography } from "@material-ui/core";
import ExerciseEditForm from "./Form";

const RightPane = ({
  styles,
  exercise: {
    title = "WELCOME!",
    description = "Please select and exercise from the left"
  },
  exercise, 
  editMode,
  muscles,
  onEdit
}) => {
  return (
    <Paper style={styles.Paper}>
      {editMode ? <ExerciseEditForm 
      handleSubmit={onEdit}
      exercise={exercise}
      muscles={muscles} />: (
        <> 

    <Typography variant="h4">{title}</Typography>
       <Typography style={{ marginTop: 20 }} variant="subtitle2">
        {description}
      </Typography>
  
        </>
      )}
    </Paper>
  );
};

export default RightPane;
