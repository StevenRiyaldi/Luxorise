import axios from "axios";
import { useEffect, useState } from "react";
import { totalPrice } from "./totalPrice";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  let total = 0;

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getOrder();
  }, []);

  const getProduct = async () => {
    const userId = localStorage.getItem("userId");

    const data = await axios.get(
      `http://localhost/luxorise/server/client/cart.php/${userId}`
    );

    const productData = data.data;

    setProduct(productData);
  };

  const getOrder = async () => {
    const userId = localStorage.getItem("userId");

    const data = await axios.get(
      `http://localhost/luxorise/server/client/payment.php/${userId}`
    );

    console.log(data);

    const orderData = data.data;

    setOrder(orderData);
  };

  return (
    <div className="container-order">
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th className="no">No. Invoice</th>
            <th className="name">Order Name</th>
            <th className="phone">Number</th>
            <th className="order">Order</th>
            <th className="summary">Summary</th>
          </tr>
        </thead>
        <tbody>
          {order.map((payment, idx) => (
            <tr key={payment.id}>
              <td>
                <h1>{idx + 1}</h1>
              </td>
              <td className="name">
                <h1>
                  {payment.first_name} {payment.last_name}
                </h1>
              </td>
              <td>
                <h1>{payment.number}</h1>
              </td>
              <td>
                {product.map((product) => (
                  <div className="product">
                    <h1>{product.nameProduct}</h1>
                    <h1 className="number">x {product.quantity}</h1>
                  </div>
                ))}
              </td>
              <td>
                {product.map((item) => {
                  total = totalPrice(item.price * item.quantity, total);
                })}
                Rp. {total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
