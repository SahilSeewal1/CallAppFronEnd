import { combineReducers } from 'redux'
import { customerReducer } from './reducer/customerReducer'
import { callReducer } from './reducer/callReducer'

const rootReducer = combineReducers({
    cxReducer: customerReducer,
    callReducer: callReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
