import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AllGroups from "../pages/AllGroups/AllGroups";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import MyGroups from "../pages/MyGroups/MyGroups";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allgroups',
        element: <AllGroups></AllGroups>
      },
      {
        path: '/creategroup',
        element: <CreateGroup></CreateGroup>
      },
      {
        path: '/mygroup',
        element: <MyGroups></MyGroups>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: 'footer',
        element: <Footer></Footer>
      }
    ]
  },
]);


