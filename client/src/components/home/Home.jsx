import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import Footer from "../footer/Footer";

const Home = () => {
  const handleClick = () => {};

  return (
    <>
      <Navbar />
      <div className="poster">
        <Link to={"/aboutus"}>
          <img src={`${process.env.PUBLIC_URL}/images/Luxorise.png`} alt="" />
          <div className="tes">
            <img
              src={`${process.env.PUBLIC_URL}/images/HoverAboutUs.png`}
              alt=""
            />
          </div>
        </Link>
        <Link to={"/couple"}>
          <img src={`${process.env.PUBLIC_URL}/images/couple.png`} alt="" />
          <div className="tes">
            <img
              src={`${process.env.PUBLIC_URL}/images/HoverCouple.png`}
              alt=""
            />
          </div>
        </Link>
        <Link to={"/male"}>
          <img src={`${process.env.PUBLIC_URL}/images/Male.png`} alt="" />
          <div className="tes">
            <img
              src={`${process.env.PUBLIC_URL}/images/HoverMale.png`}
              alt=""
            />
          </div>
        </Link>
        <Link to={"/female"}>
          <img src={`${process.env.PUBLIC_URL}/images/Female.png`} alt="" />
          <div className="tes">
            <img
              src={`${process.env.PUBLIC_URL}/images/HoverFemale.png`}
              alt=""
            />
          </div>
        </Link>
        <Link to={"/gold"}>
          <img src={`${process.env.PUBLIC_URL}/images/Gold.png`} alt="" />
          <div className="tes">
            <img
              src={`${process.env.PUBLIC_URL}/images/HoverGold.png`}
              alt=""
            />
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
