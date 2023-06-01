import { DO_CALL, DO_CALL_SUCCESS } from '../constants'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import { Customer } from '../type/customerType';
import { doCallFailure, doCallSuccess } from '../action/callAction';
import { DoCallRequestPayload } from '../type/callType';

 // const getCustomers = () =>
   // axios.get<Customer[]>("https://jsonplaceholder.typicode.com/todos")

function* getCallDetail({payload}: ReturnType<typeof DO_CALL>): any {
    
    try{
     // let response = yield call(getCustomers, payload)
     let response = yield {
      data: {
        callId: payload.customerId,
        callStatus: 'Success' 
      }   
    }
    yield put(
        doCallSuccess({
          call: response.data,
        }))
    }
    catch (e) {
        if(e instanceof Error)
        {
            yield put(
            doCallFailure({
            error: e.message,
          })
        )
    }
    else {
        yield put(
            doCallFailure({
            error: 'Unexpected error',
          })
        )
    }
}
} 

function* CallSagaData() {
yield takeLatest(DO_CALL, getCallDetail)
}

export default CallSagaData