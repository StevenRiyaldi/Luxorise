import { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Payment.css";
import axios from "axios";

const Payment = () => {
  const [payment, setPayment] = useState({
    method: "",
    first_name: "",
    last_name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPayment((prevPayemnt) => ({ ...prevPayemnt, [name]: value }));
  };

  const handleClick = async () => {
    const userId = localStorage.getItem("userId");

    await axios.post(`http://localhost/luxorise/server/client/payment.php`, {
      ...payment,
      userId,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container-payment">
        <div className="payment">
          <h3>Payment</h3>
          <select
            placeholder="Please select a payment method"
            name="method"
            value={payment.method}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Please select a payment method
            </option>
            <option value="BCA">BCA</option>
            <option value="OVO">OVO</option>
          </select>
          <div className="details">
            <label for="first-name">First Name</label>
            <input
              type="text"
              name="first_name"
              value={payment.first_name}
              onChange={handleChange}
            />
            <label for="last-name">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={payment.last_name}
              onChange={handleChange}
            />
            <label for="number">Number</label>
            <input
              type="text"
              name="number"
              value={payment.number}
              onChange={handleChange}
            />
          </div>
          <div className="image">
            <img
              src="img/342-3424868_bca-png-transparent-background-logo-bank-bca-png.png"
              alt=""
            />
            <img src="img/Logo_ovo_purple.svg.png" alt="" />
          </div>
          <button onClick={handleClick}>Pay</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
