import React, { useState, useContext, useEffect } from "react";
import "./BookRecomendation.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../Book/Book";
import AllBooksContext from "../../contexts/AllBooksContext";
import SelectedBookContext from "../../contexts/SelectedBookContext";
import { useParams } from "react-router-dom";

const BookRecomendation = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };
  const { allBooks, setAllBooks } = useContext(AllBooksContext);
  const { selectedBook, setSelectedBook } = useContext(SelectedBookContext);
  const { isbn } = useParams();
  ///State management
  const [isLoading, setIsLoading] = useState(true);
  ///fetch functions
  const getAllBooks = async () => {
    const url = "http://localhost:3000/api/books";
    return axios
      .get(url)
      .then((res) => {
        setAllBooks(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBooks();
    getSelectedBook();
  }, []);

  const getSelectedBook = async () => {
    const url = `http://localhost:3000/api/books/${isbn}`;
    return axios
      .get(url)
      .then((res) => {
        setSelectedBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!isLoading && (
        <Carousel responsive={responsive}>
          {allBooks.map((book, index) => {
            return <Book key={index} book={book} />;
          })}
        </Carousel>
      )}
    </>
  );
};

export default BookRecomendation;
