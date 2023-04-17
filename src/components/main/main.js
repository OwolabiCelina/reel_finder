import "./main.css";
import Container from "../container/container";
import { BsFileRichtext } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BsRobot } from "react-icons/bs";



const Main = () => {

    return (
      <Container>
        <div className="icon-container">
          <div className="icons">
            <BsFileRichtext className="text-icon" />
            <p>Translate</p>
          </div>

          <div className="icons">
            <BsFillMicFill className="text-icon" />
            <p>Transcribe</p>
          </div>

          <div className="icons">
            <BsRobot className="text-icon" />
            <p>paraphrase</p>
          </div>
        </div>
      </Container>
    );
}

export default Main;
