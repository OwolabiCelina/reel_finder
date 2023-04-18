import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import Main from "../components/main/main";



const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                {/* <Route path="/home/main" element={<Main />} /> */}
            </Routes>

        </div>
    )
}

export default PageRouter;