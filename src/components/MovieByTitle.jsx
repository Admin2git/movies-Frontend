import React from "react";
import useFetch from "../useFetch";

export const MovieByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://movies-backend-dusky-ten.vercel.app/movies/${title}`
  );

  console.log(data);

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Director: {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Rating: {data.rating}</p>
      <p>
        Actors:
        {Array.isArray(data.actors) ? data.actors.join(", ") : data.actors}
      </p>
      <p>Awards: {data.awards}</p>
      <p>Plot: {data.plot}</p>
      <img src={data.posterUrl} alt="Poster Url"></img>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};
