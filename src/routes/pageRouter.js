import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";
import MovieDetailsPage from "../pages/MovieDetails/movieDetailsPage";



const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/home/movie-details" element={<MovieDetailsPage />} />
            </Routes>

        </div>
    )
}

export default PageRouter;