import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import HomePage from "./HomePage.jsx";
import {VersesIndexPage} from "./VersesIndexPage.jsx";
import {VersesShowPage} from "./VersesShowPage.jsx";
import {WordsShowPage} from "./WordsShowPage.jsx";

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
        element: <VersesIndexPage />,
        loader: () => axios.get('http://localhost:3000/verses.json').then((response) => response.data),
      },
      {
        path: "/verses",
        element: <VersesIndexPage />,
        loader: () => axios.get('http://localhost:3000/verses.json').then((response) => response.data),
      },
      {
        path: "/verses/:chapter/:verse",
        element: <VersesShowPage />,
        loader: ({ params }) =>
          axios
            .get(`http://localhost:3000/verses/${params.chapter}/${params.verse_number}.json`)
            .then((response) => response.data),
      },
      {
        path: "/verses/:id",
        element: <VersesShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/verses/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/words/:id",
        element: <WordsShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/words/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
