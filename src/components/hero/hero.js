import "./hero.css"


const Hero = () => {

    return (
      <div className="hero-bg">
        <div className="hero-text">
          Translate your words now!
          <p className="hero-text-desc">
            Break down communication barriers and connect with people from all
            over the world
          </p>
        </div>
        <form>
            <div className="detect-form">
            <input name="detect-field" 
            placeholder="Type any textual language here . . . . ." />
            <button>Detect Language</button>
            </div>
        </form>

        <div className="choose-lang"></div>
      </div>
    );  
}


export default Hero;