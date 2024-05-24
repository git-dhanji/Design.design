import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path:'',
      element:<Home/>,
    }]
  },

  {
    path:"*",
    element:<div className="h-screen w-full flex justify-center text-center text-[5vw] text-white uppercase font-semibold font-['NeueMontreal']">Page is not avialable</div>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
