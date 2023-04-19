import "./hero.css"
import axios from "axios";
import { useContext,  useState } from "react";
import { MovieContext } from "../../pages/homepage/homepage";




const Hero = () => {

  const [movieName, setmovieName] = useState("");

  const {movieData, setMovieData} = useContext(MovieContext);

  const options = {
    method: "GET",
    url: "https://movie-database-alternative.p.rapidapi.com/",
    params: { s: movieName, r: "json", page: "1" },
    headers: {
      "X-RapidAPI-Key": "d834321b38msh0cdad8e30508789p119f2ajsn9ea9e60f7cd3",
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  const handleFormChange = (event) => {
    event.preventDefault()
      const value = event.target.value;
      setmovieName(value)
      console.log(movieName);
  }



  const detectLanguage = async (e) => {
    e.preventDefault()
    if (movieName === "") {
      alert("Fields Cannot be Empty")
      return
    }

     try {
      let dataDetails = await axios(options);
      if (dataDetails.status === 200){
         console.log(`consoling search ${dataDetails.data.Search}`);
         if (dataDetails.data.Search !== undefined){
            setMovieData(dataDetails.data.Search);       
         }else{
          alert("No Movies for " + movieName + " Found")
         }
         
      }
     }catch(err){
      console.log(err.message)
     }

  }

    return (
      <div className="hero-bg">
        <div className="hero-text">
          Get REEL details here!
          <p className="hero-text-desc">
            Uncover all the details about any movie with just a simple name
            search!
          </p>
        </div>
        <form>
          <div className="detect-form">
            <input
              value={movieName}
              name="detect-field"
              onChange={handleFormChange}
              placeholder="Type your movie name here . . . . ."
            />
            <button onClick={detectLanguage}>Get Movie Info</button>
          </div>
        </form>

        {/* <Main Title={movieDetails.Title} /> */}


      </div>
    );  
}


export default Hero;