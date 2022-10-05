import { Container } from "@mui/material";
import React, { useContext } from "react";
import BookDetails from "../../components/BookDetails/BookDetails";
import BookRecomendation from "../../components/BookRecomendation/BookRecomendation";
import SelectedBookContext from "../../contexts/SelectedBookContext";

const BookDetailsPage = () => {
  const { selectedBook } = useContext(SelectedBookContext);

  return (
    <Container sx={{ marginTop: "3%" }}>
      <BookDetails
        isbn={selectedBook.isbn}
        title={selectedBook.title}
        subtitle={selectedBook.subtitle}
        author={selectedBook.author}
        published={selectedBook.published}
        publisher={selectedBook.publisher}
        pages={selectedBook.pages}
        description={selectedBook.description}
        website={selectedBook.website}
        image={selectedBook.image}
      />
      <BookRecomendation />
    </Container>
  );
};

export default BookDetailsPage;
