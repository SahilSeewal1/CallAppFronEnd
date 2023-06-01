import { all, fork } from "redux-saga/effects";

import customerSagaData from "./saga/customerSaga";
import callSagaData from "./saga/callSaga";

export function* rootSaga() {
  yield all([fork(customerSagaData), fork(callSagaData)]);
}