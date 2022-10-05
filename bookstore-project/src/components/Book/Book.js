import React, { useContext } from "react";
import "./Book.css";
import bookImage from "./../../assets/img/book-image.jpg";
import { formatDate } from "../../utils";
import { useNavigate } from "react-router-dom";
import SelectedBookContext from "../../contexts/SelectedBookContext";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const { setSelectedBook } = useContext(SelectedBookContext);
  return (
    <div
      className="book"
      key={book.isbn}
      onClick={() => {
        setSelectedBook(book);
        navigate(`/search/${book.isbn}`);
      }}
    >
      <img src={book.image} alt="book_img" className="book_img" />
      <div className="book_info">
        <span className="book_info_title">
          {" "}
          {book.title ? book.title : "title"}
        </span>
        <span className="book_info_publisher">
          {book.publisher ? book.publisher : "publisher"}
        </span>
        <span className="book_info_date">
          {book.published ? formatDate(book.published) : "published"}
        </span>
      </div>
    </div>
  );
};

export default Book;
