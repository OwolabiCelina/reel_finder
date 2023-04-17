import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";



const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
            </Routes>

        </div>
    )
}

export default PageRouter;