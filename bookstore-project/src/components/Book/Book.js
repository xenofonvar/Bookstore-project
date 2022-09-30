import React from "react";
import "./Book.css";
import bookImage from "./../../assets/img/book-image.png";
import { formatDate } from "../../pages/SearchPage/utils";

const Book = ({
  isbn,
  title,
  subtitle,
  author,
  published,
  publisher,
  pages,
  description,
  website,
}) => {
  return (
    <div
      className="book"
      key={isbn}
      onClick={() => (window.location.href = `/searchPage/${isbn}`)}
    >
      <img src={bookImage} alt="book_img" className="book_img" />
      <div className="book_info">
        <span className="book_info_title"> {title ? title : "title"}</span>
        <span className="book_info_publisher">
          {publisher ? publisher : "publisher"}
        </span>
        <span className="book_info_date">
          {published ? formatDate(published) : "published"}
        </span>
      </div>
    </div>
  );
};

export default Book;
