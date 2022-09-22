import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, 150) + "..." : string;
  };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests.fetchNetflixOriginals)
        .catch((e) => console.log(e));
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie.backdrop_path ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` : '',
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-contents-title">
          {movie?.name || movie?.original_name}
        </h1>
        <div className="banner-contents-buttons">
          <button className="banner-contents-buttons-button">Play</button>
          <button className="banner-contents-buttons-button">My List</button>
          <h1 className="banner-contents-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>

      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
