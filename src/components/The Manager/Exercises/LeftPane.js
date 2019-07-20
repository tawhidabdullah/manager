import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem
} from "@material-ui/core";

const LeftPane = ({ styles, exercises, category, onselect }) => {
  return (
    <Paper style={styles.Paper}>
      {exercises.map(([musclesGroup, exercises]) => {
        return !category || category === musclesGroup ? (
          <>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {musclesGroup}
            </Typography>
            <List component="ul">
              {exercises.map(({ title, id }) => {
                return (
                  <ListItem button onClick={() => onselect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : null;
      })}
    </Paper>
  );
};

export default LeftPane;
