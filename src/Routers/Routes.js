import { createBrowserRouter } from "react-router-dom";
import FoodDetailes from "../Components/Foods/FoodDetailes";
import Foods from "../Components/Foods/Foods";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "foodservice",
          element: <Foods/>
        },
        {
          path: "foodservice/:id",
          element: <FoodDetailes/>,
          loader:({params})=>{
            return fetch(`http://localhost:5000/foods/${params.id}`)
          }
        },
      ]
    }

  ])