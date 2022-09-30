import React from "react";
import "./SearchBar.css";
import { TextField, Box } from "@mui/material";
import Button from "../Button/Button";
import { useGlobalContext } from "../../contexts/BookContext";

const SearchBar = (props) => {
  const styles = {};
  if (props.widthPercent) {
    styles["--searchBar-width-percentage"] = props.widthPercent;
  }

  const { searchQuery, setSearchQuery } = useGlobalContext();
  const handleSearch = (e) => {
    console.log(e.target.value);
    return setSearchQuery(e.target.value);
  };

  return (
    <div className="searchBarWrapper" style={styles}>
      <Box sx={{ display: "flex", alignItems: "flex-end", paddingLeft: "2%" }}>
        <TextField
          value={searchQuery}
          variant="standard"
          placeholder={"Searching a book ..."}
          fullWidth={true}
          InputProps={{
            disableUnderline: true,
            fontSize: "11px",
            height: "50px",
            endAdornment: <Button btnName={"Search"} />,
          }}
          style={{
            height: "50px",
            justifyContent: "center",
            paddingLeft: "10px",
          }}
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
