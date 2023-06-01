import { DO_CALL, DO_CALL_FAILURE, DO_CALL_SUCCESS } from "../constants"
import { CallActions, CallState } from "../type/callType";

const initialState: CallState = {
    pending: false,
    call: null,
    error: null,
  };

export const callReducer = (state = initialState, action: CallActions) => {
    switch(action.type) {
        case DO_CALL:
            return {
                ...state,
                pending: true,
                call: null,
                error: null,
            }
        case DO_CALL_SUCCESS:
            return {
                ...state,
                pending: false,
                call: action.payload.call,
                error: null
            }
        case DO_CALL_FAILURE:
            return {
                ...state,
                pending: false,
                call: null,
                error: action.payload.error
            }    
        default:
            return { 
                ...state 
            }    
    }
}