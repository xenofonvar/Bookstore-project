import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./DatePickerInput.css";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const DatePickerInput = ({ control, name, error }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        errors={error}
        defaultValue="2022"
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              inputFormat="YYYY"
              openTo="year"
              views={["year"]}
              className="date-picker"
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText error={true}>{error?.message}</FormHelperText>
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default DatePickerInput;
