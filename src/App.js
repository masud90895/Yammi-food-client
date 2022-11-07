import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routes";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
