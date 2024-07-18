import React from "react";
import { initialAppState } from "../store";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../App";
import { render } from "@testing-library/react";

export const renderWithRedux = (
  component: React.ReactNode,
  storeState = {}
) => {
  const saga = createSagaMiddleware();
  const getStore = configureMockStore([saga]);
  const store = getStore({ ...initialAppState, ...storeState });
  console.log("store test", initialAppState, storeState);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
