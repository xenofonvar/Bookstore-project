import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CategorySelector from "../CategorySelector/CategorySelector";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import RatingStars from "../RatingStars/RatingStars";

const FormField = ({ fieldName, control, error, name }) => {
  const shouldRender = (fieldName) => {
    switch (fieldName) {
      case "Rating":
        return <RatingStars name={name} error={error} control={control} />;
      case "Year":
        return <DatePickerInput error={error} control={control} name={name} />;
      case "Categories":
        return (
          <CategorySelector
            fieldName={fieldName}
            control={control}
            error={error}
            name={name}
          />
        );
      default:
        return (
          <Controller
            name={name}
            control={control}
            defaultValue=""
            errors={error}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                size="small"
                style={{ paddingLeft: "10px", display: "flex" }}
                placeholder={fieldName}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: "5%",
        width: "100%",
        justifyContent: "end",
      }}
    >
      <Typography variant="h6" component="h3">
        {`${fieldName} : `}
      </Typography>
      {shouldRender(fieldName)}
    </Box>
  );
};

export default FormField;
