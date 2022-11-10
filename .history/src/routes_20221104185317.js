import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Students from "./Pages/Students";
import Product from "./Pages/Product";
import MyClass from "./Pages/MyClass";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    component: <About />,
    main: () => <About />,
  },
  {
    path: "/profile",
    exact: false,
    component: <Profile />,
    main: () => <Profile />,
  },
  {
    path: "/contact",
    exact: false,
    component: <Contact />,
    main: () => <Contact />,
  },
  {
    path: "/products",
    exact: false,
    main: () => <Products />,
  },
  {
    path: "/notfound",
    exact: false,
    component: <ErrorPage />,
    main: () => <ErrorPage />,
  },
  {
    path: "/students",
    exact: false,
    component: <Students />,
    main: () => <Students />,
  },
  {
    path: "/myclass",
    exact: false,
    component: <MyClass />,
    main: () => <MyClass />,
  },
  {
    path: "/products/:id",
    exact: false,
    component: <Product />,
    main: () => <Product />,
  },
];

export default routes;
