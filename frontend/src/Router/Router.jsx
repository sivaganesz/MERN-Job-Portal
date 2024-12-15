import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Createjob from "../pages/Createjob";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/", element:<Home/>},
        {path:"post-job",element:<Createjob/>},
      ]
    },
  ]);

export default router;