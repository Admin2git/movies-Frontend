import React, { useState } from "react";

export const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: [],
    director: "",
    actors: [],
    language: "",
    country: "India",
    rating: 0,
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name == "releaseYear" || name == "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://movies-backend-dusky-ten.vercel.app/movies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Sending data:", formData);

      if (!response.ok) {
        throw "Failed to add movie.";
      }

      const data = await response.json();
      console.log("Added movie", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Release Year: </label>
        <br />
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Genre: </label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Director: </label>
        <br />
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Actors: </label>
        <br />
        <input
          type="text"
          name="actors"
          value={formData.actors}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Language: </label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Country: </label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Rating: </label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Plot: </label>
        <br />
        <input
          type="text"
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Awards: </label>
        <br />
        <input
          type="text"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>PosterUrl: </label>
        <br />
        <input
          type="text"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>TrailerUrl: </label>
        <br />
        <input
          type="text"
          name="trailerUrl"
          value={formData.trailerUrl}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
