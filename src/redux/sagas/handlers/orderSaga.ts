import { call,put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getOrder, orderData } from "../requests/order";
import { getOrderProduct } from "../../features/orderSlice";



export function* addOrderSaga(action: any,) {
    try {
      const response: AxiosResponse<any> = yield call(orderData, action.payload);
      console.log(response);
     if(response.data){
 action.navigate("/order")

     }
    } catch (error: any) {
      console.error(error);
    }
  }

  export function* getOrderSaga(action:any) {
    try {
      const response: AxiosResponse<any> = yield call(getOrder,action.user_id);
      console.log(response);
      yield put(getOrderProduct(response.data));

    } catch (error: any) {
      console.error(error);
    }
  }