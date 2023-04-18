import "./main.css";
import Container from "../container/container";
import { BsFileRichtext } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BsRobot } from "react-icons/bs";
import { useContext } from "react";
import { MovieContext } from "../../pages/homepage";
import MovieCard from "../MovieCard/MovieCard";



const Main = () => {

  const {movieData, setMovieData} = useContext(MovieContext);
  console.log("consoling moviedata in main");
  console.log(movieData);

  const handleClick = (e,id) => {
    console.log("clicking");
    e.preventDefault();
    alert(id)

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
