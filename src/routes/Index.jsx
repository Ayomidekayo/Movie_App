import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: ":explore", element: <Explore /> },
      { path: ":explore/:id", element: <Details /> },
      { path: "search", element: <SearchPage /> }
    ]
  }
]);

export default router;  