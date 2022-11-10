import React, { useEffect } from "react";
import Header from "../Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "../../../src/routes";
const DefaultLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.main()}
          />
        );
      });
    }
    return result;
  };
  return (
    <>
      <Header></Header>
      <Routes>{showContentMenu(routes)}</Routes>
    </>
  );
};

export default DefaultLayout;
