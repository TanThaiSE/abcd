import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [checkLogin, setCheckLogin] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      setCheckLogin(false);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink end className="navbar-brand" to="/">
        This is my class
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          {/* <li className="nav-item pl-2">
            <NavLink end to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item pl-2">
            <NavLink end to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item pl-2">
            <NavLink end to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item pl-2">
            <NavLink end to="/products">
              Products
            </NavLink>
          </li> */}
          <li className="nav-item pl-2">
            <NavLink end to="/students">
              Student
            </NavLink>
          </li>
          {/* <li className="nav-item pl-2">
            <NavLink end to="/myclass">
              My Class
            </NavLink>
          </li> */}
          {checkLogin && (
            <li className="nav-item pl-2">
              <NavLink to="/login"> Login </NavLink>
            </li>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active pl-2">
              <NavLink end to="/login" onClick={onLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Header;
