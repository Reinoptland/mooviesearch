import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=indiana+jones&apikey=a7462395`
      );

      console.log(response.data.Search);
      setMovies(response.data.Search);
    }

    fetchMovies();
  }, []);

  console.log("MOVIES", movies);
  return (
    <div>
      {movies.map((movie) => {
        console.log(movie);
        return (
          <div>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} />
            <Link to={`/movies/${movie.imdbID}`}>View details</Link>
          </div>
        );
      })}
    </div>
  );
}
