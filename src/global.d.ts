// global.d.ts
import MockAdapter from "axios-mock-adapter";
import { MockStoreEnhanced } from "redux-mock-store";
import { Action } from "redux";
import createSagaMiddleware from "redux-saga";

declare global {
  var mockStore: MockStoreEnhanced<unknown, Action>;
  var mockAxios: MockAdapter;
  var sagaMiddleware: ReturnType<typeof createSagaMiddleware>;
  var serverSuccess: (response: any) => void;
  var serverFailure: (error: any) => void;
  var serverAccessFailure: (error: any) => void;
  var throwErrors: (error: any) => void;
}
