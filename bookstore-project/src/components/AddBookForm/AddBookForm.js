import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormField from "../FormField/FormField";
const URL =
  /^(|https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)$/i;

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required to submit form")
    .min(10, "Title should have minimum of 10 characters")
    .max(120, "Title should have maximum of 120 characters")
    .matches(
      /[0-9A-Za-z@”#&*!]/g,
      "Title can contain a-z ,A-Z,0-9 and @”#&*! as characters"
    ),
  description: yup
    .string()
    .required("Description is required to submit form")
    .max(512, "Description should have maximum of 120 characters")
    .matches(
      /^[A-Z][a-z0-9_ ]*$/,
      "Description should start with the first letter be uppercase"
    ),
  categories: yup
    .array()
    .of(yup.string())
    .max(4, "You should select at most 4 categories"),
  author: yup.string(),
  year: yup.string(),
  publisher: yup
    .string()
    .required("Publisher is required to submit form")
    .min(5)
    .max(60),
  numberOfPages: yup
    .number()
    .typeError("Number of pages should be a number")
    .required("Number of Pages is required to submit form")
    .max(9999, "Maximum number of pages should be at most 9999"),
  image: yup.string().matches(URL, "Enter a valid image url"),
  rating: yup.string(),
  isbn10: yup
    .string()
    .required("ISBN-10 is required to submit form")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "ISBN-10 should have  10 digits")
    .max(10, "ISBN-10 should have 10 digits"),
  isbn13: yup
    .string()
    .required("ISBN-13 is required to submit form")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(13, "ISBN-13 should have  13 digits")
    .max(13, "ISBN-13 should have 13 digits"),
});

const AddBookForm = ({ handlePostData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const leftFormConfig = [
    { fieldLabel: "Title", error: errors.title, name: "title" },
    {
      fieldLabel: "Description",
      error: errors.description,
      name: "description",
    },
    { fieldLabel: "Categories", error: errors.categories, name: "categories" },
    { fieldLabel: "Author Name", error: errors.author, name: "author" },
    { fieldLabel: "Publisher", error: errors.publisher, name: "publisher" },
    { fieldLabel: "Year", error: errors.year, name: "year" },
    {
      fieldLabel: "Number of Pages",
      error: errors.numberOfPages,
      name: "numberOfPages",
    },
  ];

  const rightFormConfig = [
    { fieldLabel: "Image", error: errors.image, name: "image" },
    { fieldLabel: "Rating", name: "rating" },
    { fieldLabel: "ISBN-10", error: errors.isbn10, name: "isbn10" },
    { fieldLabel: "ISBN-13", error: errors.isbn13, name: "isbn13" },
  ];

  return (
    <Paper sx={{ backgroundColor: "#efefef", marginBottom: "5%" }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        paddingBottom={"5%"}
        paddingTop={"3%"}
      >
        Add new Book
      </Typography>
      <form onSubmit={handleSubmit(handlePostData)}>
        <Grid container sx={{ justifyContent: "space-evenly" }}>
          <Grid item width={"400px"}>
            {leftFormConfig.map(({ fieldLabel, error, name }) => (
              <FormField
                key={fieldLabel}
                fieldName={fieldLabel}
                control={control}
                error={error}
                name={name}
              />
            ))}
          </Grid>
          <Grid item width={"400px"}>
            {rightFormConfig.map(({ fieldLabel, error, name }) => (
              <FormField
                key={fieldLabel}
                fieldName={fieldLabel}
                control={control}
                error={error}
                name={name}
              />
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "3%",
          }}
        >
          <Button variant="contained" type="submit" sx={{ width: "200px" }}>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AddBookForm;
