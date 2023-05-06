import "./Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await axios.get(
      `http://localhost/luxorise/server/admin/product.php/${id}`
    );

    const productData = data.data;

    setProduct(productData);
  };

  const handleUp = () => {
    if (counter == product.stock) return;

    setCounter(counter + 1);
  };

  const handleBellow = () => {
    if (counter == 1) return;

    setCounter(counter - 1);
  };

  const handleClick = async () => {
    const userId = localStorage.getItem("userId");

    await axios.post(`http://localhost/luxorise/server/client/cart.php`, {
      quantity: counter,
      userId,
      productId: product.id,
    });

    navigate("/cart");
  };

  return (
    <div className="container-detail">
      {Object.keys(product).length && (
        <div className="detail">
          <div className="left">
            <div className="text">
              <a href="#">{product.type}</a>
              <span>&gt;</span>
              {product.nameProduct}
            </div>
            <img src={product.image} alt="" />
          </div>
          <div className="right">
            <h1>{product.nameProduct}</h1>
            <div className="qty">
              <h3>Qty</h3>
              <button onClick={handleBellow}>-</button>
              <p>{counter}</p>
              <button onClick={handleUp}>+</button>
            </div>
            <div className="stock">
              <h4>Stock</h4>
              <h4>{product.stock}</h4>
            </div>
            <div className="cart">
              <h1>Rp. {product.price}</h1>
              <button onClick={handleClick}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
