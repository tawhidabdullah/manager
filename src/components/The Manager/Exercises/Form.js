import React, {useEffect} from 'react';
import { Button, FormControl, TextField, InputLabel, MenuItem, Select } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    FormControl: {
        width: 500
    },
    iconSmall: {
        fontSize: 20,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
});

const Form = ({exercise: exerciseState, classes, handleSubmit, handleClose, muscles: categories }) => {

    const getExerciseState = () => {
        return exerciseState ? exerciseState : {
            title: "",
            description: "",
            muscles: ""
        }
    }; 


    const [exercise, setExercise] = React.useState(getExerciseState());

    useEffect(()=>{
        setExercise(exerciseState)
    },[exerciseState])

    const onSubmit = () => {
        handleSubmit({id: exercise.title.toLowerCase().replace(/ /g, "-") , ...exercise });
        setExercise(getExerciseState()); 
        handleClose && handleClose(); 
    };

    const handleChange = ({ target: { value, name } }) => {
        setExercise(oldValues => ({
            ...oldValues,
            [name]: value
        }));
    }

    return (
        <form>
            <TextField
                value={exercise.title}
                onChange={handleChange}
                autoFocus
                margin="dense"
                name="title"
                id="name"
                label="Title"
                type="text"
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel htmlFor="Muscles">Muscles</InputLabel>
                <Select
                    name="muscles"
                    value={exercise.muscles}
                    onChange={handleChange}
                >
                    {categories.map(category => {
                        return <MenuItem key={category} value={category}>{category}</MenuItem>
                    })}
                </Select>
            </FormControl>

            <TextField
                value={exercise.description}
                onChange={handleChange}
                name="description"
                id="standard-multiline-static"
                label="Description"
                multiline
                rows="4"
                margin="normal"
                fullWidth
            />

            <Button onClick={onSubmit}
                variant="contained"
                color="primary"
            >
                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
               {exerciseState ? "save": "create"}
          </Button>
        </form>
    )
}

export default withStyles(styles)(Form); 