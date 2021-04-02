import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import axios from "axios";
import DataBanner from "./DataBanner";
import "./Data.css";

const Admin = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("/api").then((res) => {
      setProduct(res.data);
    });
  }, [setProduct]);
  console.log(product);

  const handleDelete = (_id) => {
    axios.delete(`/api/${_id}`);
    console.log(_id);
  };
  return (
    <div className="admin">
      <DataBanner />
      <div className='manageProduct'>
        <h3>Manage Product</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
      {product.map((product) => {
        const { name, weight, price, _id } = product;
        return (
          <div key={_id} className="table">
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{weight}kg</td>
                <td>${price}</td>
                <td>
                  <BsPencil />{" "}
                  <AiFillDelete onClick={() => handleDelete(_id)} />
                </td>
              </tr>
            </tbody>
          </div>
        );
      })}
      </table>
      </div>
    </div>
  );
};

export default Admin;
{
  /* <table>
<thead>
  <tr>
    <th>Product Name</th>
    <th>Weight</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{name}</td>
    <td>{weight}</td>
    <td>{price}</td>
    <td><BsPencil/> <AiFillDelete onClick={()=>handleDelete(_id)}/></td>
  </tr>
</tbody>
</table> */
}
