import BookGridTable from "../../components/BookGridTable/BookGridTable";
import { Box, Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllBooksContext from "../../contexts/AllBooksContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
const HomePage = () => {
  const paths = [{ name: "Home", path: "/" }];
  //context
  const { allBooks, setAllBooks } = useContext(AllBooksContext);
  ///State management
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setfilters] = useState([
    { name: "Fantasy", isChecked: false },
    { name: "Adventure", isChecked: false },
    { name: "Romance", isChecked: false },
    { name: "Mystery", isChecked: false },
    { name: "Horror", isChecked: false },
    { name: "Thriller", isChecked: false },
    { name: "Science Fiction", isChecked: false },
    { name: "Children’s", isChecked: false },
    { name: "Cookbook", isChecked: false },
    { name: "Art", isChecked: false },
    { name: "Development", isChecked: false },
    { name: "Health", isChecked: false },
    { name: "History", isChecked: false },
    { name: "Travel", isChecked: false },
    { name: "Guide / How-to", isChecked: false },
    { name: "Computers & Technology", isChecked: false },
  ]);
  //this state contains an array with string categories
  const [checkedFilters, setCheckedFilters] = useState([]);

  //this state contains an array with book with the selected categories
  const [filteredBooks, setFilteredBooks] = useState([]);
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
  }, []);

  /// set filters that has been checked
  useEffect(() => {
    filters.map((filter) => {
      if (filter.isChecked === true) {
        if (!checkedFilters.includes(filter.name))
          setCheckedFilters((prev) => [...prev, filter.name]);
      } else if (filter.isChecked === false) {
        setCheckedFilters((prev) => {
          return prev.filter((checkedFilter) => {
            return checkedFilter !== filter.name;
          });
        });
      }
    });
  }, [filters]);

  ///set Filtered Books
  useEffect(() => {
    if (!checkedFilters.length > 0) {
      setFilteredBooks([]);
    }

    checkedFilters.map((checkedFilter) => {
      allBooks.map((book) => {
        if (
          book.categories.includes(checkedFilter) &&
          !filteredBooks.includes(book)
        ) {
          setFilteredBooks((prev) => [...prev, book]);
        }
      });
    });
  }, [checkedFilters]);

  const handleToggle = (categoryName) => {
    const newState = filters.map((category) => {
      if (category.name === categoryName) {
        return { ...category, isChecked: !category.isChecked };
      }
      return category;
    });
    setfilters(newState);
  };

  return (
    <>
      <Breadcrumb paths={paths} />
      <Box sx={{ marginTop: "3%", display: "flex", flexDirection: "row" }}>
        <CategoryFilter handleToggle={handleToggle} filters={filters} />

        {!isLoading && !filteredBooks.length > 0 ? (
          <BookGridTable books={allBooks} />
        ) : (
          <BookGridTable books={filteredBooks} />
        )}
      </Box>
    </>
  );
};

export default HomePage;
