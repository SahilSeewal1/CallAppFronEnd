import { DO_CALL, 
    DO_CALL_SUCCESS, 
    DO_CALL_FAILURE 
   } from "../constants";
import {
DoCallRequest,
DoCallSuccess,
DoCallSuccessPayload,
DoCallFailure,
DoCallFailurePayload,
DoCallRequestPayload
} from "../type/callType";


export const doCallRequest = (contact: string | null, customerId: Number): DoCallRequest => (
   {
      type: DO_CALL,
      payload: {
      contact: contact,
      customerId: customerId
   }
}
)

export const doCallSuccess = (
payload: DoCallSuccessPayload
): DoCallSuccess => (
{type: DO_CALL_SUCCESS,
payload
})

export const doCallFailure = (
payload: DoCallFailurePayload
): DoCallFailure => ({
type: DO_CALL_FAILURE,
payload
});
