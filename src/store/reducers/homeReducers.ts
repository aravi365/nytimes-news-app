import { createReducer } from "@reduxjs/toolkit";
import {
  fetchNewsHomeLoading,
  fetchNewsHomeSuccess,
} from "../actions/homeActions";

export interface HomeState {
  data: any[];
  error: null | Error;
  loading: boolean;
}

const initialState: HomeState = {
  data: [],
  error: null,
  loading: false,
};

const homeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchNewsHomeLoading, (state: HomeState) => {
      state.loading = true;
    })
    .addCase(fetchNewsHomeSuccess, (state: HomeState, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });
});

export default homeReducer;
