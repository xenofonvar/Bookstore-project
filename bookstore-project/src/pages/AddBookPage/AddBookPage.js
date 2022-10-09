import { Alert, Snackbar } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const AddBookPage = () => {
  const [data, setData] = useState(null);
  const [isDataPosted, setIsDataPosted] = useState(false);
  const navigate = useNavigate();
  const paths = [
    { name: "Home", path: "/" },
    { name: "Add Book", path: "/addBook" },
  ];
  const handlePostData = (data) => {
    setData(data);
    //check if post data is empty

    if (data) {
      postBook(data);
      setIsDataPosted(true);
      setTimeout(() => {
        navigate("/searchPage");
        setIsDataPosted(false);
      }, 3000);
    }
  };

  ///fetch functions
  const postBook = async (data) => {
    const url = "http://localhost:3000/api/books";
    console.log("after post", data);
    return axios
      .post(url, {
        isbn: data.isbn13,
        title: data.title,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        published: data.year,
        pages: data.numberOfPages,
        website: data?.website,
        image: data?.image,
        isbn10: data.isbn10,
        categories: data.categories,
        rating: data.rating,
        image: data.image,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Breadcrumb paths={paths} />
      <Container sx={{ marginTop: "3%" }}>
        <Snackbar
          open={isDataPosted}
          sx={{ marginTop: "2%", marginBottom: "2%" }}
          autoHideDuration={3000}
        >
          <Alert severity="success">You succesfully submitted a book!</Alert>
        </Snackbar>

        <AddBookForm handlePostData={handlePostData} />
      </Container>
    </>
  );
};

export default AddBookPage;
