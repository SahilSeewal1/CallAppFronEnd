import {
    DO_CALL,
    DO_CALL_SUCCESS,
    DO_CALL_FAILURE
} from '../constants'


/*export interface Call {
    userId: number
    id: number
    title: string
    completed: boolean
  }
*/

export interface Call {
  callId: number;
  callStatus: string; 
}
  
  export interface CallState {
    pending: boolean;
    call: Call | null;
    error: string | null;
  }

  export interface DoCallRequestPayload{
    contact: string | null;
    customerId: Number;
  }

  export interface DoCallSuccessPayload {
    call: Call;
  }

  export interface DoCallFailurePayload {
    error: string;
  }
  
  export type DoCallRequest = {
    type: typeof DO_CALL;
    payload: DoCallRequestPayload
  }

  export type DoCallSuccess = {
    type: typeof DO_CALL_SUCCESS;
    payload: DoCallSuccessPayload;
  };
  
  export type DoCallFailure = {
    type: typeof DO_CALL_FAILURE;
    payload: DoCallFailurePayload;
  };
  
  export type CallActions =
    | DoCallRequest
    | DoCallSuccess
    | DoCallFailure;
  
