import { Link } from "react-router-dom";
import Container from "../container/container";
import "./header.css"

const Header = () => {
    return (
        <Container>
            <div className="header">
                <div className="logo"> <Link to="/" className="link"> REEL FINDER</Link></div>
                <div className="nav-links">
                    <ul>
                        {/* <li><Link to={"/detect-language"}> Detect language</Link></li> */}
                        <li><Link to={"/play-game"}> Guess game</Link></li>
                        <li><Link to={"/detect-language"}> Login</Link></li>
                        <li><Link to={"/detect-language"}>Create Account</Link></li>
                    </ul>
                </div>
            </div>
               
         </Container>
    )
}

export default Header;