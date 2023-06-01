import { GET_CUSTOMER, 
         GET_CUSTOMER_SUCCESS, 
         GET_CUSTOMER_FAILURE 
        } from "../constants";
import {
    GetCustomerRequest,
    GetCustomerSuccess,
    GetCustomerSuccessPayload,
    GetCustomerFailure,
    GetCustomerFailurePayload,
  } from "../type/customerType";
  

export const getCustomerRequest = (): GetCustomerRequest => {
    return {
        type: GET_CUSTOMER
    }
}

export const getCustomerSuccess = (
    payload: GetCustomerSuccessPayload
  ): GetCustomerSuccess => ({
    type: GET_CUSTOMER_SUCCESS,
    payload
  })

export const getCustomerFailure = (
    payload: GetCustomerFailurePayload
  ): GetCustomerFailure => ({
    type: GET_CUSTOMER_FAILURE,
    payload
  });
