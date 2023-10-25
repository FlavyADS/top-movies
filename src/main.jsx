import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputMovies from "./router/InputMovies.jsx";
import ListMovies from "./router/ListMovies.jsx";
import EditMovies from "./router/EditMovies.jsx";
import Home from "./router/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "listaFilmes",
        element: <ListMovies />,
      },
      {
        path: "cadastrarFilme",
        element: <InputMovies />,
      },
      {
        path: "editarFilme",
        element: <EditMovies />,
      },
      {
        path: "/editarFilme/:id",
        element: <EditMovies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
