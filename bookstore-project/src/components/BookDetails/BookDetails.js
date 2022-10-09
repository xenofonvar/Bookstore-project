import { Avatar, Button, Chip, Grid, Rating } from "@mui/material";
import React from "react";
import bookImage from "./../../assets/img/book-image.jpg";
import "./BookDetails.css";
import { formatDate } from "../../utils";

const BookDetails = ({
  isbn,
  title,
  description,
  author,
  subtitle,
  publisher,
  published,
  pages,
  website,
  image,
  isbn10,
  categories,
  rating,
}) => {
  const category = ["No Category"];
  console.log(rating);
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="space-evenly"
        alignContent="center"
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginTop={"5%"}
        backgroundColor={"#efefef"}
        borderRadius={"10px"}
        marginBottom={"3%"}
      >
        <Grid item display={"flex"} flexDirection={"column"} padding={"2%"}>
          <img src={image ? image : bookImage} className="image" />
          <div>
            <div className="author-section">
              <Avatar src="/broken-image.jpg" className="avatar" />
              <h3>{author}</h3>
            </div>
            <Rating value={parseInt(rating)} readOnly />
          </div>
        </Grid>
        <Grid
          item
          alignItems={"center"}
          maxWidth={"500px"}
          paddingBottom={"2%"}
          marginTop={"4%"}
        >
          <div className="book-details">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p className="book-description">{description}</p>
            <div className="button-section">
              <Button variant="outlined">Favourite</Button>
              <Button variant="outlined">Share</Button>
            </div>
            <div className="more-details-section">
              <div className="category-section">
                <h3>{"Category :"}</h3>
                {categories ? (
                  categories.map((category, index) => (
                    <Chip key={index} label={category} variant="outlined" />
                  ))
                ) : (
                  <Chip key={category} label={category} variant="outlined" />
                )}
              </div>
              <div className="detail-pair">
                <h3>{"Year : "}</h3>
                <p>{formatDate(published)}</p>
              </div>
              <div className="detail-pair">
                <h3>{"Number of Pages : "}</h3>
                <p>{pages}</p>
              </div>
            </div>
            <div className="detail-pair book-publisher ">
              <h3>{"Publisher : "}</h3>
              <p>{publisher}</p>
            </div>
            {isbn10 && (
              <div className="detail-pair">
                <h3>{"ISBN-10 : "}</h3>
                <p>{isbn10}</p>
              </div>
            )}
            <div className="detail-pair">
              <h3>{"ISBN-13 : "}</h3>
              <p>{isbn}</p>
            </div>
            <Button
              variant="outlined"
              sx={{ marginTop: "5%" }}
              onClick={() => (window.location.href = website ? website : "/")}
            >
              Buy
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDetails;
