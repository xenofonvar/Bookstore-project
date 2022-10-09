import { Grid, Pagination, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import Book from "../Book/Book";
import { Box } from "@mui/system";
import SearchInputValueContext from "../../contexts/SearchInputValueContext";
import usePagination from "./usePagination";

const BookGridTable = ({ books }) => {
  const { searchInputValue } = useContext(SearchInputValueContext);
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(books.length / PER_PAGE);
  const _DATA = usePagination(books, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jumpToPage(p);
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          width: "80vw",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {books &&
          searchInputValue === "" &&
          _DATA.currentData().map((book, index) => {
            return (
              <Grid item key={index} xs={3}>
                <Book book={book} />
              </Grid>
            );
          })}

        {books &&
          searchInputValue !== "" &&
          books
            .filter((book) => searchInputValue.includes(book.title))
            .map((book) => {
              return (
                <Grid item key={book.isbn} xs={3}>
                  <Book book={book} />
                </Grid>
              );
            })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "80vw",
          marginBottom: "5%",
          marginTop: "2%",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default BookGridTable;
