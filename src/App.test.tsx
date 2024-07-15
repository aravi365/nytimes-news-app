import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("App component", () => {
  it("renders Header component", () => {
    render(
      <ThemeProvider theme={{ typography: { fontFamily: "Roboto" } }}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    );
    expect(screen.getByText("NY Times news")).toBeInTheDocument();
  });
});
