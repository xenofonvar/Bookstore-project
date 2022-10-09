import React from "react";
import "./CategorySelector.css";
import { Controller } from "react-hook-form";
import {
  FormHelperText,
  Box,
  MenuItem,
  Chip,
  Select,
  FormControl,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  "Fantasy",
  "Adventure",
  "Romance",
  "Mystery",
  "Horror",
  "Thriller",
  "Science Fiction",
  "Children’s",
  "Cookbook",
  "Art",
  "Development",
  "Health",
  "History",
  "Travel",
  "Guide / How-to",
  "Computers & Technology",
];

const CategorySelector = ({ error, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      errors={error}
      defaultValue={[]}
      render={({ field }) => (
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            {...field}
            error={!!error}
            labelId="demo-multiple-chip-label"
            id="multiple-chip"
            multiple
            defaultValue={[]}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={true}>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default CategorySelector;
