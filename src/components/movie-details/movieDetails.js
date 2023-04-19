import { useLocation } from "react-router-dom"
import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./movieDetails.css";

const MovieDetails = () => {

    
    const location = useLocation();

    const [movieInfo, setMovieInfo] = useState("");

    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: location.state.movieId + "" },
      headers: {
        "X-RapidAPI-Key": "d834321b38msh0cdad8e30508789p119f2ajsn9ea9e60f7cd3",
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };



    const handleFetch = async () => {
            try {

                let fetchData = await axios(options);
                console.log("logging in movie details");
                console.log(fetchData);
                if (fetchData.status === 200) {
                        setMovieInfo(fetchData.data);
                }

            } catch (err) {
                console.log(err.message);
            }
    }

    useEffect (() => {
        handleFetch();
    },[] )

    


    return (
      <div>
        <Header />
        {movieInfo !== "" ? (
          <div className="movie-info-container">
            <div className="movie-pics">
              <img src={movieInfo.Poster} alt="movie-poster" />
            </div>
            <div className="movie-info">
              <p>Plot:</p>
              <span>
                <em>{movieInfo.Plot}</em>
              </span>
              <p>Writers:</p>
              <span>{movieInfo.Writer}</span>
              <p>Actors:</p>
              <span>{movieInfo.Actors}</span>
              <p>Language:</p>
              <span>{movieInfo.Language}</span>
              <p>Rated:</p>
              <span>{movieInfo.Rated}</span>
              <p>Runtime:</p>
              <span>{movieInfo.Runtime}</span>
              <p>Ratings:</p>
              <span>Value: {movieInfo.imdbRating}</span>
              <p>Box Office:</p>
              <span>Value: {movieInfo.BoxOffice}</span>
            </div>
          </div>
        ) : (
          "Can't load movie Details"
        )}
        <Footer />
      </div>
    );
}

export default MovieDetails;