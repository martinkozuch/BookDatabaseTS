import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHeart } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import logo from "../img/pngegg (4).png";

const Navbar: React.FC = () => {
  const { favourites } = useAppContext();
  
  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link className="nav-logo" style={{ textDecoration: "none" }} to="/">
          <h2>Book Database</h2>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt=""></img>
        </Link>
      </div>

      <div className="nav-right">
        <Link style={{ textDecoration: "none" }} to="/favourites">
          <h4 className="fav-title">Your Favourites Books</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/favourites">
          <div className="fav-icon">
            <h4>
              <AiFillHeart />
            </h4>
            {<p>{favourites.length} </p>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
