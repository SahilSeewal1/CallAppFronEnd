import { GET_CUSTOMER, GET_CUSTOMER_SUCCESS } from '../constants'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import { Customer } from '../type/customerType';
import { getCustomerFailure, getCustomerSuccess } from '../action/customerAction';

// const getCustomers = () =>
  // axios.get<Customer[]>("https://jsonplaceholder.typicode.com/todos")

function* getCustomerList(): any {
    
    try{
    // let response = yield call(getCustomers)
    let response = yield {
      data: [
        {
          customerId: 1,
          customerName: "Ramesh Kumar",
          customerAddress: "Abc colony, delhi",
          customerContact: ["1234564567", "0987654321"] 
        },
        {
          customerId: 2,
          customerName: "Suresh Kapoor",
          customerAddress: "Xyz colony, A",
          customerContact: ["1234545890"] 
        },
        {
          customerId: 3,
          customerName: "Raj",
          customerAddress: "GHP colony, B",
          customerContact: ["6788900876", "4567899979", "4567890087"] 
        }
      ]
    }
    yield put(
        getCustomerSuccess({
          customers: response.data,
        }))
    }
    catch (e) {
        if(e instanceof Error)
        {
            yield put(
            getCustomerFailure({
            error: e.message,
          })
        )
    }
    else {
        yield put(
            getCustomerFailure({
            error: 'Unexpected error',
          })
        )
    }
}
} 

function* CustomerSagaData() {
yield takeLatest(GET_CUSTOMER, getCustomerList)
}

export default CustomerSagaData