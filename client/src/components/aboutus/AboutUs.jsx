import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container-about">
        <h1>About Us</h1>
        <img src={`${process.env.PUBLIC_URL}/images/Luxorise.png`} alt="" />
        <div className="telling">
          <h2>What is Luxorise?</h2>
          <p>
            Luxorise is a luxury brand that provides products with good quality
            and <br />
            prices. Here we focused on product quality, such as choosing <br />
            fabrics with a soft texture in order to provide comfort for
            consumers so <br />
            that they can be used all day in carrying out their activities.
            After that, in <br />
            terms of stitches and cuts, everything is done carefully and neatly
            so that <br />
            the product will look classy and of high quality. Then we also
            choose
            <br />
            fabrics that are durable so that they last a long time and do not
            fade. In <br />
            addition, we also create products with unique designs so that
            consumers <br />
            who use these products will be very cool and look different from the
            <br />
            others.
          </p>
        </div>
        <div className="telling">
          <h2>Vision</h2>
          <p>
            To be the best company in the field of fashion by providing quality,
            <br />
            exclusive products and providing the best service to every consumer.
          </p>
        </div>
        <div className="telling">
          <h2>Mission</h2>
          <p>
            Creating quality products at affordable prices and can increase
            consumer <br />
            confidence when using our products.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
