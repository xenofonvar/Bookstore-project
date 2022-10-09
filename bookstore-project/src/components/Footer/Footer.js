import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#272727", color: "white" }}>
      <section className="footer-logo-section">
        <NavLink to="/" className="logo">
          BookStore
        </NavLink>
      </section>
      <Grid
        container
        sx={{ justifyContent: "space-evenly", paddingTop: "10px" }}
      >
        <Grid item className="contact-section">
          <h3>Company</h3>

          <h5>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </NavLink>
          </h5>
          <h5>
            <NavLink
              to="/searchPage"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Search
            </NavLink>
          </h5>
          <h5>
            <NavLink
              to="/addBook"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Add Book
            </NavLink>
          </h5>
        </Grid>
        <Grid item>
          <h3 className="social-title">Social</h3>
          <section className="social-section">
            <div className="circle">
              <FacebookIcon />
            </div>
            <div className="circle">
              <InstagramIcon />
            </div>
            <div className="circle">
              <TwitterIcon />
            </div>
            <div className="circle">
              <AlternateEmailIcon />
            </div>
          </section>
        </Grid>
        <Grid item className="contact-section">
          <h3>Contact</h3>
          <h5>Street : 106 Cross Lane </h5>
          <h5>City : San Diego, USA </h5>
          <h5>State : California </h5>
          <h5>ZipCode : 22400 </h5>
        </Grid>
      </Grid>

      <div className="terms-section">
        <h6>Terms of Use</h6>
        <h6>Privacy Policy</h6>
      </div>

      <div className="copyright-section">
        <h6>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2022 BookStore
        </h6>
      </div>
    </Box>
  );
};

export default Footer;
