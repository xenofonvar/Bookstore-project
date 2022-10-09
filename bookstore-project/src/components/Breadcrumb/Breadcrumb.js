import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  return (
    <Box
      sx={{
        margin: "2%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {paths &&
        paths.map((path, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: index === paths.length - 1 ? "#000" : "#777",
            }}
          >
            <NavLink
              style={{
                textDecoration: "none",
                color: index === paths.length - 1 ? "#000" : "#777",
              }}
              to={path.path}
            >
              {path.name}{" "}
            </NavLink>
            {index !== paths.length - 1 && (
              <ArrowForwardIosIcon fontSize="small" />
            )}
          </Box>
        ))}
    </Box>
  );
};

export default Breadcrumb;
