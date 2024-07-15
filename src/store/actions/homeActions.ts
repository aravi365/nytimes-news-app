import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_NEWS_HOME,
  FETCH_NEWS_HOME_LOADING,
  FETCH_NEWS_HOME_SUCCESS,
} from "./types";

// Create actions with types
export const fetchNewsHome = createAction(FETCH_NEWS_HOME);
export const fetchNewsHomeLoading = createAction(FETCH_NEWS_HOME_LOADING);

export const fetchNewsHomeSuccess = createAction<any[]>(
  FETCH_NEWS_HOME_SUCCESS
);
