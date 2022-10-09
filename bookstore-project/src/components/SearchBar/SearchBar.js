import React, { useContext } from "react";
import "./SearchBar.css";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import bookImage from "./../../assets/img/book-image.jpg";
import AllBooksContext from "../../contexts/AllBooksContext";
import SearchInputValueContext from "../../contexts/SearchInputValueContext";

const SearchBar = () => {
  const { allBooks, setAllBooks } = useContext(AllBooksContext);
  const { searchInputValue, setSearchInputValue } = useContext(
    SearchInputValueContext
  );

  return (
    <div className="searchBarWrapper">
      <Autocomplete
        autoComplete
        id="search"
        freeSolo
        sx={{
          width: "100%",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& fieldset": { border: "none" },
              input: { color: "#111" },
            }}
            placeholder={"Search a book ..."}
          />
        )}
        options={allBooks.map((book) => book)}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="40"
              src={option.image ? option.image : bookImage}
              alt=""
            />
            {option.title}
          </Box>
        )}
        inputValue={searchInputValue}
        onInputChange={(_, newInputValue) => {
          setSearchInputValue(newInputValue);
        }}
        getOptionLabel={(option) => option?.title}
      />
    </div>
  );
};

export default SearchBar;
