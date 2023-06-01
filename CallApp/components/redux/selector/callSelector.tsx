import { createSelector } from "reselect"
import { AppState } from "../rootReducer"

const callPending = (state: AppState) => state.callReducer.pending

const getCall = (state: AppState) => state.callReducer.call

const callError = (state: AppState) => state.callReducer.error

export const callSelector = createSelector(getCall, (call) => call)

export const callPendingSelector = createSelector(
  callPending,
  (pending) => pending
)

export const callErrorSelector = createSelector(callError, (error) => error)
