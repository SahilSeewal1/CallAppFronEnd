import {
    GET_CUSTOMER,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE
} from '../constants'

/*
export interface Customer {
    userId: number
    id: number
    title: string
    completed: boolean
  }
*/

export interface Customer {
  customerId: number;
  customerName: string;
  customerAddress: string;
  customerContact: string[]; 
}
  
  export interface CustomerState {
    pending: boolean;
    customers: Customer[];
    error: string | null;
  }

  export interface GetCustomerSuccessPayload {
    customers: Customer[];
  }

  export interface GetCustomerFailurePayload {
    error: string;
  }
  
  export type GetCustomerRequest = {
    type: typeof GET_CUSTOMER;
  }

  export type GetCustomerSuccess = {
    type: typeof GET_CUSTOMER_SUCCESS;
    payload: GetCustomerSuccessPayload;
  };
  
  export type GetCustomerFailure = {
    type: typeof GET_CUSTOMER_FAILURE;
    payload: GetCustomerFailurePayload;
  };
  
  export type CustomerActions =
    | GetCustomerRequest
    | GetCustomerSuccess
    | GetCustomerFailure;
  
