import { call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { orderData } from "../requests/order";



export function* addOrderSaga(action: any,) {
    try {
      const response: AxiosResponse<any> = yield call(orderData, action.payload);
      console.log(response);

    } catch (error: any) {
      console.error(error);
    }
  }