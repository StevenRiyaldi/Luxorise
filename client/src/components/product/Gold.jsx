import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Product.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Gold = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const locate = location.pathname.split("/");

    const data = await axios.get(
      "http://localhost/luxorise/server/admin/product.php"
    );

    const productData = data.data;

    const productDatas = productData.filter((product) => {
      return product.type.toLowerCase() === locate[1];
    });

    setProduct(productDatas);
  };
  return (
    <>
      <Navbar />
      <div className="container-product">
        <img src={`${process.env.PUBLIC_URL}/images/Gold.png`} alt="" />
        <div className="card-row">
          {product.length &&
            product.map((product) => (
              <div className="card">
                <a href="#">
                  <img src={product.image} alt="" />
                </a>
                <a href="#">{product.nameProduct}</a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Gold;
