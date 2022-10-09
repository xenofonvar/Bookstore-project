import { Container } from "@mui/material";
import BookGridTable from "../../components/BookGridTable/BookGridTable";
import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllBooksContext from "../../contexts/AllBooksContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const SearchPage = () => {
  //context
  const { allBooks, setAllBooks } = useContext(AllBooksContext);

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
  }, []);
  const paths = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/searchPage" },
  ];

  return (
    <>
      <Breadcrumb paths={paths} />
      <Container sx={{ marginTop: "3%" }}>
        {!isLoading && <SearchBar />}
        {/* TODO: use context */}
        {!isLoading && <BookGridTable books={allBooks} />}
      </Container>
    </>
  );
};
export { SearchPage };
export default SearchPage;
