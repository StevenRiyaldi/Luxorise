import { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Register = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  };

  const handleClick = async () => {
    if (register.password !== register.rePassword) return "";

    delete register.rePassword;

    const respond = await axios.post(
      "http://localhost/luxorise/server/client/register.php",
      register
    );

    localStorage.setItem("userId", respond.data.id);
    setCurrentUser(respond.data);
  };

  return (
    <>
      <Navbar />
      <div className="container-register">
        <h3>L U X O R I S E</h3>
        <div className="register">
          <h4>SIGN UP</h4>
          <form action="POST" className="form">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              value={register.username}
              onChange={handleChange}
              required="required"
            />
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={register.email}
              onChange={handleChange}
              required="required"
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              required="required"
            />
            <label for="re-enter-password">Re - Enter Password</label>
            <input
              type="password"
              name="rePassword"
              value={register.rePassword}
              onChange={handleChange}
              required="required"
            />
          </form>
          <button id="button" onClick={handleClick}>
            Daftar
          </button>
          <p>
            Already have an account ? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
