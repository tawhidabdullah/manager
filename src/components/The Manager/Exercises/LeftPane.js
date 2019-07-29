import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import {Delete, Edit } from '@material-ui/icons';

const LeftPane = ({ styles, exercises, category, onselect, handleDelete, handleSelectEdit }) => {
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
                  <ListItem key={id} button onClick={() => onselect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                    <IconButton 
                      onClick={() => handleSelectEdit(id)} 
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                      onClick={() => handleDelete(id)} 
                      >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
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
