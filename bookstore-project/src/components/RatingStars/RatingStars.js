import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./RatingStars.css";

const RatingStars = ({ name, error, control }) => {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        marginLeft: "20px",
      }}
    >
      <Controller
        name={name}
        control={control}
        defaultValue=""
        error={!!error}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Rating</InputLabel>
            <Select
              {...field}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rating"
            >
              <MenuItem value={1}>
                <Rating value={1} readOnly />
              </MenuItem>
              <MenuItem value={2}>
                <Rating value={2} readOnly />
              </MenuItem>
              <MenuItem value={3}>
                <Rating value={3} readOnly />
              </MenuItem>
              <MenuItem value={4}>
                <Rating value={4} readOnly />
              </MenuItem>
              <MenuItem value={5}>
                <Rating value={5} readOnly />
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default RatingStars;
