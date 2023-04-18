import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";
import { createContext, useState } from "react";

export const MovieContext = createContext();

const HomePage = () => {

  const [movieData, setMovieData] =  useState([]); 

    return (
      <div className="homepage">
        <MovieContext.Provider value={{movieData, setMovieData}}>
          <Header />
          <Hero />
          <Main />
          <Footer />
        </MovieContext.Provider>
      </div>
    );
}

export default HomePage;