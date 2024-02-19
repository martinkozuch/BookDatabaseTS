import React, {useState} from "react";
import "./booklist.css";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const BookList: React.FC = () => {
  const {
    addToFavourites,
    removeFromFavourites,
    books,
    deleteOne,
    favouritesChecker,
  } = useAppContext();

  const navigate = useNavigate();

  const [visibleAuthors, setVisibleAuthors] = useState<number>(10);
  
  const handleShowMore = () => {
    setVisibleAuthors(prev => prev + 10);
  };

  return (
    <div className="booklist-container">
      <h1>All The Books</h1>

      <div className="booklist-main">
        {books.slice(0,visibleAuthors).map((book) => (
          <div className="book" key={book.id}>
            <h2>{book.title}</h2>
            <h5>{book.authors} </h5>
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
                  Remove from Favourites
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
            <button className="del-butt" onClick={() => deleteOne(book.id)}>
              Delete This Book
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleShowMore}>+ 10 Books</button>
    </div>
  );
};

export default BookList;
