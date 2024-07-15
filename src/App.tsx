import Home from "./pages/Home";
import { Header } from "./components";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NewsDetail from "./pages/NewsDetail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header title="NY Times news" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-news/:id" element={<NewsDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
