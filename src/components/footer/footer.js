import "./footer.css";
import {BiCoffeeTogo} from "react-icons/bi";
import {BsFillEmojiSmileUpsideDownFill} from "react-icons/bs";
import { useEffect, useState } from "react";
import {AiFillHeart} from "react-icons/ai";

const Footer = () => {

    const [date, setYearDate] = useState();
    const yearTime = () => {
        setYearDate( new Date().getFullYear());
    }
    useEffect(() => {
        yearTime()
    })
    return (
      <div className="footer-bg">
        <div>
          <a href="/contact"> Wanna buy me a coffee</a>
          <BiCoffeeTogo className="coffee-cup" />
          <BsFillEmojiSmileUpsideDownFill className="smiley-face" />
        </div>
        <p className="copy-year">
          &copy; {date} Developed and designed with
          <AiFillHeart className="love" />
          from Banke Owolabi
        </p>
      </div>
    );
}


export default Footer;