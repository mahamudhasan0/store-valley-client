import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Store Valley</Link>
     <div className='head'>
     <Link to="/">Home</Link>
      <p>Order</p>
      <Link to="/addproduct">Admin</Link>
      <Link to="/login">Login</Link>
      <p>Deals</p>
     </div>
    </div>
  );
};

export default Header;
