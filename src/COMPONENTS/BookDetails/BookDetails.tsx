import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../../API";
import "./bookDetail.css";
import MyButton from "../MATERIAL/button/MyButton";
import { useNavigate } from "react-router-dom";

interface Book {
  title: string;
  image_url: string;
  description: string;
  authors: string;
}

const BookDetails: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Book>(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="details-container">
      <div className="book-details">
        <h1>{book?.title}</h1>
        <h4>Author: {book?.authors}</h4>
        <img src={book?.image_url} alt="" />
        <p>
          <b>Description: </b>
          {book?.description}
        </p>
      </div>
      <MyButton label="Go Back" onClick={() => navigate(`/`)} />
    </div>
  );
};

export default BookDetails;
