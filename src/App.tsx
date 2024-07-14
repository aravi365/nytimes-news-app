import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Header } from "./components";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NewsDetail from "./pages/NewsDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view-news/:id",
    element: <NewsDetail />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
