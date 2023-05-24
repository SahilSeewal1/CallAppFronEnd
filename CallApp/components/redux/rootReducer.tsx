import { combineReducers } from 'redux'
import { reducer } from './reducer/customerReducer'

const rootReducer = combineReducers({
    cxReducer: reducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
