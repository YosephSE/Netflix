import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  console.log(movie);
  return <div className="w-full h-[550px] text-white">
    <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
  </div>;
};

export default Main;
