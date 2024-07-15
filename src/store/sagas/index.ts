import { all } from "redux-saga/effects";
import { watchFetchNewsHome } from "./homeSaga";

export default function* rootSaga() {
  yield all([watchFetchNewsHome()]);
}
