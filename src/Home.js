import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import {useLocation} from 'react-router-dom'

const Home = (props) => {
  const location = useLocation()
  const [product, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState();
  useEffect(() => {
    axios.get("/api").then((res) => {
      setProduct(res.data);
    });
  }, [setProduct]);
 
  const handleCheckout=(_id)=>{
      axios.get(`/api/${_id}`).then((res)=>{
        setSingleProduct(res.data)
      })
      localStorage.setItem('singleProduct',JSON.stringify(singleProduct))
  }
  useEffect(()=>{
    handleCheckout()
  },[singleProduct,location])
  console.log(singleProduct)
  return (
    <div className='home'>
      <div>
      <input placeholder="search here" className='searchinp'/>
      <button className="search">Search</button>
      </div>
     <div className='prod'>
     {product.map((item) => {
        const { file, name, price, _id } = item;
        return (
          <div key={_id} className="items">
            <img src={file} alt="" />
            <p>{name}</p>
            <div className='buyprice'>
              <p>${price}</p>
              <button className="buy" onClick={()=>handleCheckout(_id)}>Buy now</button>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Home;
