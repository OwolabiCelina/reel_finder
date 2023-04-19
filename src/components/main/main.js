import "./main.css";
// import { useContext, useState } from "react";
import { MovieContext } from "../../pages/homepage/homepage";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";



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
             {movieData.length !== 0 ? movieData.map(movies => (
          <MovieCard handleClick= {(e) => handleClick(e,movies.imdbID)}
          Poster={movies.Poster} 
          Title={movies.Title} 
          Type={movies.Type}
          Year={movies.Year} 
          Id={movies.imdbID} 
          />
          )) : "Can't Find any Movie For the above Search"}

      </div>
    );
}

export default Main;
