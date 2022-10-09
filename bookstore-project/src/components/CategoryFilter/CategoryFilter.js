import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CategoryFilter = ({ handleToggle, filters }) => {
  return (
    <Box sx={{ paddingLeft: "2%" }}>
      <Typography component={"h2"} variant={"h6"}>
        Categories
      </Typography>
      <Divider />
      {filters.map((category, index) => (
        <FormGroup key={index}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => handleToggle(category.name)}
                checked={category.isChecked}
              />
            }
            label={category.name}
          />
        </FormGroup>
      ))}
    </Box>
  );
};

export default CategoryFilter;
