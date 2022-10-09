import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const options = [
  {
    id: "navbar-01",
    titleEn: "Home",
    path: "/",
  },
  {
    id: "navbar-02",
    titleEn: "Search",
    path: "/searchPage",
  },
  {
    id: "navbar-03",
    titleEn: "Add Book",
    path: "/addBook",
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
