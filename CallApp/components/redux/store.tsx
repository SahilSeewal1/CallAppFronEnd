import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagaRoot'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store