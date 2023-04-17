import "./footer.css";

const Footer = () => {

    const yearTime = () => {
        return new Date().getFullYear();
    }
    return (
        
                  <div className="footer-bg">
                    <p>Wanna buy me a coffee </p>
                    &copy;
                </div>

    )
}


export default Footer;