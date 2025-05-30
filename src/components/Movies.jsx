import { useState } from "react";
import useFetch from "../useFetch";

const Movies = () => {
  const [successMessage, setsuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://movies-backend-dusky-ten.vercel.app/movies"
  );

  console.log(data);
  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://movies-backend-dusky-ten.vercel.app/movies/${movieId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw "Failed to delete movie.";
      }

      const data = await response.json();
      if (data) {
        window.location.reload();
        setsuccessMessage("Movie deleted succussfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>
            {movie.title}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};

export default Movies;
