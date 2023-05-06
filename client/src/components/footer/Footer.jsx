import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="container-footer">
      <div className="deskripsi">
        <span>luxorise</span>
        <p>
          is a brand in the fashion sector that <br />
          provides products such as quality clothes at <br />
          affordable prices.
        </p>
      </div>
      <div className="contact">
        <span>Contact Us</span>
        <p>Email</p>
        <p>Whatsapp</p>
      </div>
      <div className="social">
        <span>Social Media</span>
        <div className="instagram">
          <a href="https://www.instagram.com/luxorise.id/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/luxorise.id/">Instagram</a>
        </div>
      </div>
      <div className="about">
        <span>About Us</span>
        <Link to={"/aboutus"}>About Us</Link>
      </div>
    </div>
  );
};

export default Footer;
