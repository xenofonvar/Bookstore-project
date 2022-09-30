import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const options = [
  {
    id: "navbar-01",
    titleEn: "About",
    path: "/about",
  },
  {
    id: "navbar-02",
    titleEn: "Contact",
    path: "/contact",
  },
  {
    id: "navbar-03",
    titleEn: "Search",
    path: "/searchPage",
  },
];
const Navbar = () => {
  return (
    <section className="navbar_main">
      <div className="navbar_left">
        <NavLink to="/" className="navlink_logo">
          BookStore
        </NavLink>
      </div>
      <div className="navbar_right">
        <div className="navbar_options">
          {options.map((item) => (
            <NavLink key={item.id} to={item.path} className="navbar_item">
              {item.titleEn}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
