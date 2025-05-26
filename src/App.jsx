import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { MovieByTitle } from "./components/MovieByTitle";
import { AddMovieForm } from "./components/AddMovieForm";

function App() {
  return (
    <>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title={"Barfi!"} />
    </>
  );
}

export default App;
