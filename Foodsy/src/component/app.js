import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import resList from "./resList";
import Applayout from "./Applayout";
import About from "./About";
import ContactUs from "./ContactUs";
import Error from "./error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import Grocery from "./Grocery";
import { Suspense } from "react";
import Caart from "./Caart";

const Grocery = lazy(() => import("./Grocery"));

const About = lazy(() => import("./About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/caart",
        element: <Caart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
