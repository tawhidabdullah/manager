import React, { useState } from "react";
import { Header, Footer } from "./Layout";
import Exercises from "./Exercises";
import { muscles, exercises } from "./store";

const App = () => {
  const initialExercise = exercises;
  const [stateExercise] = useState(initialExercise);
  const [category, setCategory] = useState(null);
  const [exercise, setExercise] = useState({});

  const getExerciseByMuscles = () => {
    return Object.entries(
      stateExercise.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  const handleCategorySelect = category => {
    setCategory(category);
  };

  const handleExerciseSelect = id => {
    setExercise(stateExercise.find(ex => ex.id === id));
  };

  const tempExercises = getExerciseByMuscles();
  return (
    <>
      <Header />
      <Exercises
        onSelect={handleExerciseSelect}
        exercises={tempExercises}
        category={category}
        exercise={exercise}
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
