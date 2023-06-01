import { createSelector } from "reselect"
import { AppState } from "../rootReducer"

const getPending = (state: AppState) => state.cxReducer.pending

const getCustomers = (state: AppState) => state.cxReducer.customers

const getError = (state: AppState) => state.cxReducer.error

export const getTodosSelector = createSelector(getCustomers, (customers) => customers)

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getErrorSelector = createSelector(getError, (error) => error)
