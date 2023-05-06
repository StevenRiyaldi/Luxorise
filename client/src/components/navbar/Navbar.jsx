import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "./Navbar.css";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import ProfileContext from "../context/profileContext";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { userProfile } = useContext(ProfileContext);
  const [search, setSearch] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container-navbar">
      <Link to={"/"} className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="" />
      </Link>
      <div className={navbar ? "navbar-nav active" : "navbar-nav"}>
        <Link to={"/"}>H O M E</Link>
        <Link to={"/couple"}>C O U P L E</Link>
        <Link to={"/male"}>M A L E</Link>
        <Link to={"/female"}>F E M A L E</Link>
        <Link to={"/gold"}>G O L D</Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-extra">
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
        </div>
        {Object.keys(currentUser).length && (
          <>
            <AiOutlineShoppingCart
              className="cart"
              onClick={() => navigate("/cart")}
            />
            {userProfile.image ? (
              <img src={userProfile.image} alt="" />
            ) : (
              <BiUserCircle className="user-profile" />
            )}
          </>
        )}
        <AiOutlineMenu className="menu" onClick={() => setNavbar(!navbar)} />
      </div>
    </div>
  );
};

export default Navbar;
