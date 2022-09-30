import { Container } from "@mui/material";
import { Box } from "@mui/system";
import BookGridTable from "../../components/BookGridTable/BookGridTable";
import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../contexts/BookContext";

const SearchPage = () => {
  //context
  const { searchQuery, setSearchQuery } = useGlobalContext();

  ///State management
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  ///fetch functions
  const getAllBooks = async () => {
    const url = "http://localhost:3000/api/books";
    return axios
      .get(url)
      .then((res) => {
        setAllBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchBooks = async (query) => {
    setLoading(true);
    const url = `http://localhost:3000/api/api/books/?search=${query}`;
    return axios
      .get(url)
      .then((res) => {
        setSearchBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ///////

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    getSearchBooks(searchQuery);
  }, [searchBooks]);

  return (
    <Container>
      <Box sx={{ marginTop: "3%" }}>
        <SearchBar />
        <BookGridTable books={allBooks} />
      </Box>
    </Container>
  );
};
export { SearchPage };
export default SearchPage;
