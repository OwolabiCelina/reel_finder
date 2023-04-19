import "./main.css";
import { MovieContext } from "../../pages/homepage/homepage";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import Lottie from "lottie-react";
import movie from "../../json/movie.json";



const Main = () => {

  const {movieData, setMovieData} = useContext(MovieContext);
  const navigate = useNavigate()

  console.log(movieData);

  const handleClick = (e,id) => {
    console.log("clicking");
    e.preventDefault();
    navigate("/home/movie-details", { state: { movieId: id } });

  }


    return (
      <div className="main-container">
        {movieData.length !== 0 ? (
          movieData.map((movies) => (
            <MovieCard
              handleClick={(e) => handleClick(e, movies.imdbID)}
              Poster={movies.Poster}
              Title={movies.Title}
              Type={movies.Type}
              Year={movies.Year}
              Id={movies.imdbID}
            />
          ))
        ) : (
          <Lottie style={{marginLeft: "30%"}} animationData={movie} />
        )}
      </div>
    );
}

export default Main;
