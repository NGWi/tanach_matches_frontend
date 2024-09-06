import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import {VersesPage} from "./VersesPage.jsx";
import VersesIndexPage from "./VersesIndexPage.jsx";
import VersesShowPage from "./VersesShowPage.jsx";
import {WordsPage} from "./WordsPage.jsx";
import WordsShowPage from "./WordsShowPage.jsx";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />,
      // },      
      {
        path: "/",
        element: <VersesPage />,
      },
      {
        path: "/verses.json",
        element: <VersesIndexPage />,
        loader: () => axios.get("http://localhost:3000/verses.json").then((response) => response.data),
      },
      {
        path: "/verses/:chapter/:verse.json",
        element: <VersesShowPage />,
        loader: ({params}) => axios.get(`http://localhost:3000/verses/${params.chapter}/${params.verse_number}.json`).then((response) => response.data),
      },
      {
        path: "/verses/:id.json",
        element: <VersesShowPage />,
        loader: ({params}) => axios.get(`http://localhost:3000/verses/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/words/:id.json",
        element: <WordsShowPage />,
      },
    ],
  },
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;