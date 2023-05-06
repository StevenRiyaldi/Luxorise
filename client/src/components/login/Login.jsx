import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../context/userContext";
import Footer from "../footer/Footer";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const handleClick = async () => {
    const respond = await axios.post(
      "http://localhost/luxorise/server/client/login.php",
      login
    );

    localStorage.setItem("userId", respond.data.id);
    setCurrentUser(respond.data);

    navigate("/");
  };

  return (
    <div className="container-login">
      <h1>LUXORISE</h1>
      <div className="authentication">
        <h1>Login</h1>
        <div className="username">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={login.email}
            onChange={handleChange}
            required="required"
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            required="required"
          />
        </div>

        <button onClick={handleClick}>Login</button>
        <p>
          Do not have an account ?<Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
