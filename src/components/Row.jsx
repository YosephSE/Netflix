import React, { useEffect, useState } from "react";
import axios from "axios";

import Movie from "./Movie";
const Row = ({ title, URL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setMovies(res.data.results);
    });
  }, [URL]);
  
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="flex relative items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <Movie item={item} id={id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
