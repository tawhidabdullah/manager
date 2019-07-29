import React from 'react';
import { Fab } from '@material-ui/core';
import { DialogContent, DialogContentText, DialogTitle, Dialog } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import CreateExerciseForm from "./Form";


const FormDialog = ({ muscles, onExerciseCreate }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  };

  return (
    <>
      <Fab color="secondary" aria-label="Add"
        onClick={handleClickOpen}>
        <NavigationIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
           You will have to fill all the field in order to create a successfull exercise!
          </DialogContentText>
          <CreateExerciseForm
          handleSubmit={onExerciseCreate}
          muscles={muscles}
          handleClose={handleClose}
          exercise={""}
           />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormDialog; 