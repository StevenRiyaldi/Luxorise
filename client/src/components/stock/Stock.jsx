import { useEffect, useState } from "react";
import "./Stock.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Stock = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await axios.get(
      "http://localhost/luxorise/server/admin/product.php"
    );

    const productData = data.data;

    setProduct(productData);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const data = await axios.delete(
      `http://localhost/luxorise/server/admin/product.php/${id}`
    );

    const productData = product.filter((product) => {
      return product.id != id;
    });

    setProduct(productData);
  };

  

  return (
    <div className="container-order">
      <h1>Stock List</h1>
      <table>
        <thead>
          <tr>
            <th className="no">No</th>
            <th className="name">Name</th>
            <th className="picture">Picture</th>
            <th className="price">Price</th>
            <th className="stock">Stock</th>
            <th className="button">
              <button onClick={() => navigate("/addproduct")}>
                Add Product
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.length &&
            product.map((product, index) => (
              <tr>
                <td>
                  <h1>{index + 1}</h1>
                </td>
                <td className="name">
                  <h1>{product.nameProduct}</h1>
                </td>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>
                  <h1>Rp. {product.price}</h1>
                </td>
                <td>
                  <h1>{product.stock}</h1>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
