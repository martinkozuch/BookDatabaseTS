import React from "react";
import "./favourites.css";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MyButton from '../MATERIAL/button/MyButton'

const Favourites: React.FC = () => {
  const {
    favourites,
    addToFavourites,
    removeFromFavourites,
    favouritesChecker,
  } = useAppContext();
  console.log("favourites are", favourites);
  const navigate = useNavigate();

  return (
    <div className="fav-container">
      <h1>Your Favourites Books:</h1>
      <div className="fav-box">
        {favourites.length > 0 ? (
          favourites.map((book) => (
            <div className="book-fav" key={book.id}>
              <h2>{book.title}</h2>
              <h5>{book.authors}</h5>
              <img
                src={book.image_url}
                alt=""
                onClick={() => navigate(`/books/${book.id}`)}
              ></img>
              <div>
                {favouritesChecker(book.id) ? (
                  <button
                    className="fav-butt"
                    onClick={() => removeFromFavourites(book.id)}
                  >
                    Remove From Favourites
                  </button>
                ) : (
                  <button
                    className="fav-butt"
                    onClick={() => addToFavourites(book)}
                  >
                    Add To Favourites
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-fav-container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2>
                You dont have any favourites yet! <br /> Go back and choose your
                favourite books! <br />{" "}
              </h2>
            </Link>
          </div>
        )}
      </div>
      <MyButton  label="Go Back" onClick={() => navigate(`/`)} />
    </div>
  );
};

export default Favourites;
