import React, { useEffect, useState } from "react";
import axios from "axios";

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
  return <div>I am a list</div>;
}
