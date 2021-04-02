import React, { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import DataBanner from './DataBanner'
import "./Data.css";

const DataTable = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    weight: "",
    file: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    axios.post("/api", product);
  };
  console.log(product);
  return (
    <div className="productform">
    <DataBanner/>
      <form className="form">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={product.weight}
          onChange={handleChange}
        />
        <label>Add Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <label>Add Photo</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setProduct({ ...product, file: base64 })
          }
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default DataTable;
