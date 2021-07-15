import { all } from "redux-saga/effects";

import exampleSaga from "./modules/sagas";
import usersSaga from "./modules/sagas";

/**
 * Root Saga
 * Every time a new saga is added will also need to add it to the array being
 * passed to all()
 */
export default function* rootSaga() {
  yield all([exampleSaga(), usersSaga()]);
}
