import { Grid } from "@mui/material";
import React from "react";
import Book from "../Book/Book";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  gridTable: {
    display: "flex",
    justifyItems: "flex-start",
    alignItems: "center",
  },
  paperStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const BookGridTable = ({ books }) => {
  const classes = useStyles();

  return (
    <Box className={classes.paperStyles}>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={classes.gridTable}
      >
        {books.map((book) => {
          return (
            <Grid item xs={3}>
              <Book
                key={book.isbn}
                isbn={book.isbn}
                title={book.title}
                subtitle={book.subtitle}
                author={book.author}
                published={book.published}
                publisher={book.publisher}
                pages={book.pages}
                description={book.description}
                website={book.website}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BookGridTable;
