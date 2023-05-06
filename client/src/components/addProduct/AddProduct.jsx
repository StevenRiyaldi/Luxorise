import { useState } from "react";
import "./AddProduct.css";
import { uploadImages } from "./imageHelper";
import axios from "axios";

const AddProduct = () => {
  const [image, setImage] = useState();
  const [product, setProduct] = useState({
    nameProduct: "",
    price: "",
    stock: "",
    type: "",
    image: "",
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleClick = async () => {
    const imageUrl = await uploadImages([image]);
    const data = await axios.post(
      "http://localhost/luxorise/server/admin/product.php",
      { ...product, image: imageUrl[0] }
    );
    console.log(data);
  };

  return (
    <div className="container-addproduct">
      <div className="addproduct">
        <input
          type="text"
          placeholder="Add product name"
          id="pname"
          value={product.nameProduct}
          name="nameProduct"
          onChange={handleChange}
        />
        <div className="position">
          <div className="left">
            <img src="img/no-profile.png" />
            <div className="file">
              {image ? (
                <img
                  src={
                    image
                      ? typeof image === "string"
                        ? image
                        : URL.createObjectURL(image)
                      : undefined
                  }
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <></>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </div>
          </div>
          <div className="right">
            {/* <form> */}
            <label for="price">Price</label>
            <input
              type="text"
              placeholder="add price"
              id="name"
              value={product.price}
              name="price"
              onChange={handleChange}
            />
            <label for="stock" value={product.price} name="price">
              Stock
            </label>
            <input
              type="text"
              placeholder="add stock"
              id="price"
              value={product.stock}
              name="stock"
              onChange={handleChange}
            />
            <label for="type">Type</label>
            <input
              type="text"
              placeholder="add type"
              id="type"
              value={product.type}
              name="type"
              onChange={handleChange}
            />
            <button id="button" onClick={handleClick}>
              Save
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
