import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Enigma Magic | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
