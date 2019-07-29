import React, { useState } from "react";
import { Header, Footer } from "./Layout";
import Exercises from "./Exercises";
import { muscles, exercises } from "./store";

const App = () => {
  const initialExercise = exercises;
  const [stateExercise, setStateExercise] = useState(initialExercise);
  const [category, setCategory] = useState(null);
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

  const getExerciseByMuscles = () => {
    const initialExercises = muscles.reduce((exercises, category) => {
      return {
        ...exercises,
        [category]: []
      }
    }, {});


    return Object.entries(
      stateExercise.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initialExercises)
    );
  };

  const handleExerciseCreate = (exercise) => {
    setStateExercise(oldExercise => (
      [...oldExercise, exercise]
    ))
  }

  const handleCategorySelect = category => {
    setCategory(category);
  };

  const handleExerciseSelect = id => {
    setExercise(stateExercise.find(ex => ex.id === id));
    setEditMode(false);
  };

  const handleExerciseDelete = (id) => {
    setStateExercise(oldExercises => (
      [...oldExercises.filter((ex => id !== ex.id))]
    )); 
    setEditMode((editMode => exercise => exercise.id === id ? false : editMode));
    setExercise(exercise => exercise.id === id ? {}: exercise); 
  };

  const handleExerciseSelectEdit = (id) => {
    setEditMode(true);
    setExercise(stateExercise.find(ex => ex.id === id));
  };
  const handleExerciseEdit = (exercise) => {
    setStateExercise(oldExercises => (
      [...oldExercises.filter((ex => exercise.id !== ex.id)), exercise]
    )); 
    setExercise(exercise); 
  };

  const tempExercises = getExerciseByMuscles();
  return (
    <>
      <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
      <Exercises
        onSelect={handleExerciseSelect}
        exercises={tempExercises}
        category={category}
        exercise={exercise}
        handleExerciseDelete={handleExerciseDelete}
        handleSelectEdit={handleExerciseSelectEdit}
        editMode={editMode}
        muscles={muscles}
        handleExerciseEdit={handleExerciseEdit}
      />
      <Footer
        muscles={muscles}
        selectCategory={handleCategorySelect}
        category={category}
      />
    </>
  );
};

export default App;
