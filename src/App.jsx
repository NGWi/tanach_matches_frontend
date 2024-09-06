import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import {VersesPage} from "./VersesPage.jsx";
import VersesListPage from "./VersesListPage.jsx";
import VersesShowPage from "./VersesShowPage.jsx";
// import {WordsShowPage} from "./WordsShowPage.jsx";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/verses.json",
        element: <VersesListPage />,
        loader: () => axios.get("http://localhost:3000/verses.json").then((response) => response.data),
      },
      {
        path: "/verses/:chapter/:verse.json",
        element: <VersesShowPage/>,
        loader: ({params}) => axios.get(`http://localhost:3000/verses/${params.chapter}/${params.verse}.json`).then((response) => response.data),
      },
      {
        path: "/verses/:id.json",
        element: <VersesShowPage />,
        loader: ({params}) => axios.get(`http://localhost:3000/verses/${params.id}.json`).then((response) => response.data),
      },
      // {
      //   path: "/words/:id",
      //   element: <WordsShowPage />,
      // },
    ],
  },
]);

function App() {
  return (
  <div> <VersesPage/></div>
  )
  // return <RouterProvider router={router} />;
}

export default App;