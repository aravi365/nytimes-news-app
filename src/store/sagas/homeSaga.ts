import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNewsHomeLoading,
  fetchNewsHomeSuccess,
} from "../actions/homeActions";
import { FETCH_NEWS_HOME } from "../actions/types";
import { NewsApiResponse, getNews } from "../../api/methods/getNews";
import { formattedData } from "../../utils/dataUtils";

function* fetchNewsHomeSaga() {
  try {
    yield put(fetchNewsHomeLoading());
    const response: NewsApiResponse = yield call(getNews); //call api
    if (response?.results) {
      yield put(fetchNewsHomeSuccess(formattedData(response?.results)));
    } else {
      yield put({ type: "FETCH_NEWS_HOME_FAILURE", payload: "Error" });
    }
  } catch (error) {
    yield put({ type: "FETCH_NEWS_HOME_FAILURE", payload: error });
  }
}

export function* watchFetchNewsHome() {
  yield takeLatest(FETCH_NEWS_HOME, fetchNewsHomeSaga);
}
