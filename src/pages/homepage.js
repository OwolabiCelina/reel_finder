import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";

const HomePage = () => {
    return (
      <div className="homepage">
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    );
}

export default HomePage;