import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { addCart, decrQuantity, deleteCart, getCart, incrQuantity } from "../requests/cart";
import { Cart, editDecremCartItems, editIncremCartItems, fetchCartItems} from "../../features/cartSlice";

export function* addCartSaga(action: any) {
  try {
    console.log(action.payload);
    const response: AxiosResponse<any> = yield call(addCart, action.payload);
    console.log(response);
    // yield put(fetchCartItems(response.data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* getCartSaga(action: any) {
  try {
    const response: AxiosResponse<Cart[]> = yield call(getCart, action.id);
 
      yield put(fetchCartItems(response.data));
    
    console.log(response)
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}


export function* incremCartSaga(action: any): Generator<any, void, AxiosResponse<Cart, any>> {
  try {
    const response: AxiosResponse<Cart> = yield call(incrQuantity, action.payload);
    console.log(response.data);
    yield put(editIncremCartItems(response.data));
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}

export function* decremCartSaga(action: any): Generator<any, void, AxiosResponse<Cart, any>> {
  try {
    console.log(action.payload)
    const response: AxiosResponse<Cart> = yield call(decrQuantity, action.payload);
    console.log(response);
    yield put(editDecremCartItems(response.data));
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}
export function* deleteCartSaga(action: any): Generator<any, void, AxiosResponse<Cart, any>> {
  try {
    console.log(action.payload)
    const response: AxiosResponse<Cart> = yield call(deleteCart, action.payload);
    console.log(response);

  } catch (error: any) {
    console.error(error);

  }
}