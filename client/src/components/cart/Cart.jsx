import { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const userId = localStorage.getItem("userId");

    const data = await axios.get(
      `http://localhost/luxorise/server/client/cart.php/${userId}`
    );

    const cartData = data.data;

    setCart(cartData);
  };
  return (
    <>
      <Navbar />
      <div className="container-cart">
        <h1>bought items</h1>
        <img src="" alt="cart logo" />
        <div className="total">
          <h1>total</h1>
          <div className="cart">
            <table>
              <thead>
                <tr>
                  <th>nama</th>
                  <th>gambar</th>
                  <th>harga</th>
                </tr>
              </thead>
              <tbody>
                {cart.length &&
                  cart.map((product) => (
                    <tr>
                      <td className="title" data-label="Item">
                        <h1>{product.nameProduct}</h1>
                      </td>
                      <td className="img" data-label="Item">
                        <img src={product.image} alt="testing" />
                      </td>
                      <td className="price" data-label="Price">
                        <h3>RP.{product.price}</h3>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <h2>confrm payment?</h2>
        <div className="confirm">
          <button onClick={() => navigate("/payment")}>✓</button>
          <button onClick={() => navigate("/")}>X</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
