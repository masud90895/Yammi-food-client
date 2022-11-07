import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Athentication/Login";
import Register from "../Components/Athentication/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FoodDetailes from "../Components/Foods/FoodDetailes";
import Foods from "../Components/Foods/Foods";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Components/Blog/Blog";
import PrivetRoutes from "./PrivetRoutes";
import MyReview from "../Components/MyReview/MyReview";
import PriveteRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "foodservice",
        element: <Foods />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "myReviews",
        element: (
          <PriveteRoutes>
            <MyReview />
          </PriveteRoutes>
        ),
      },
      {
        path: "foodservice/:id",
        element: (
          <PrivetRoutes>
            <FoodDetailes />
          </PrivetRoutes>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/foods/${params.id}`);
        },
      },
    ],
  },
]);
