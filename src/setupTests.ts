// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import "@testing-library/jest-dom";
import { Action } from "redux";

// Polyfill for matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => ({}),
      removeListener: () => ({}),
    };
  };

// Mock functions for window methods
jest.setTimeout(20000);
window.open = jest.fn();
window.scrollTo = jest.fn();
(window as any).gib = {
  setAuthStatus: jest.fn(),
  setSessionID: jest.fn(),
  IS_GUEST: "IS_GUEST",
};

// Configure Saga Middleware
global.sagaMiddleware = createSagaMiddleware();
const middlewares = [global.sagaMiddleware]; // Add saga middleware to the middlewares array
const mockStoreCreator = configureMockStore(middlewares);
global.mockStore = mockStoreCreator() as MockStoreEnhanced<unknown, Action>;

// Mock Axios
beforeEach(() => {
  global.mockAxios = new MockAdapter(axios);
});

afterEach(() => {
  global.mockAxios.restore();
});

// Mock API responses
global.serverSuccess = (response: any) => {
  global.mockAxios.onAny().reply(200, response);
};

global.serverFailure = (error: any) => {
  global.mockAxios.onAny().reply(500, error);
};

global.serverAccessFailure = (error: any) => {
  global.mockAxios.onAny().reply(403, error);
};

global.throwErrors = (error: any) => {
  throw new Error(error);
};
