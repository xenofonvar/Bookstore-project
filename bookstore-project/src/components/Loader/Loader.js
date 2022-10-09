import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress />
    </div>
  );
};

export default Loader;
