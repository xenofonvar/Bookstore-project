import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Book from "../Book/Book";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import SearchInputValueContext from "../../contexts/SearchInputValueContext";
import SelectedBookContext from "../../contexts/SelectedBookContext";

const useStyles = makeStyles({
  gridTable: {
    display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  paperStyles: {
    display: "flex",
    justifyContent: "center",
  },
});

const BookGridTable = ({ books }) => {
  const classes = useStyles();

  const { searchInputValue } = useContext(SearchInputValueContext);
  return (
    <Box className={classes.paperStyles}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={classes.gridTable}
      >
        {books &&
          searchInputValue === "" &&
          books.map((book) => {
            return (
              <Grid item key={book.isbn} xs={3}>
                <Book book={book} />
              </Grid>
            );
          })}

        {/* TODO: Refactor it so search of the selected book be in search page */}

        {books &&
          searchInputValue !== "" &&
          books
            .filter((book) =>
              searchInputValue.toLowerCase().includes(book.title.toLowerCase())
            )
            .map((book) => {
              return (
                <Grid item key={book.isbn} xs={3}>
                  <Book book={book} />
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

export default BookGridTable;
