import { GET_CUSTOMER, GET_CUSTOMER_FAILURE, GET_CUSTOMER_SUCCESS } from "../constants"
import { CustomerActions, CustomerState } from "../types";

const initialState: CustomerState = {
    pending: false,
    customers: [],
    error: null,
  };

export const reducer = (state = initialState, action: CustomerActions) => {
    switch(action.type) {
        case GET_CUSTOMER:
            return {
                ...state,
                pending: true
            }
        case GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                pending: false,
                customers: action.payload.customers,
                error: null
            }
        case GET_CUSTOMER_FAILURE:
            return {
                ...state,
                pending: false,
                customers: [],
                error: action.payload.error
            }        
        default:
            return { 
                ...state 
            }    
    }
}