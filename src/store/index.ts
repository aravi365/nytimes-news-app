import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Middleware } from "redux";
import homeReducer, { HomeState } from "./reducers/homeReducers";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sagas from "./sagas";

export interface RootState {
  home: HomeState;
  // Add other slices of state as needed
}
const persistConfig = {
  key: "root",
  storage,
};
export const initialAppState = {
  home: homeReducer,
};
const combinedReducer = combineReducers(initialAppState);

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware, logger];

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(sagas);
export default store;
