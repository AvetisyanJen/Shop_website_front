
// import { fetchProducts, Product } from "../features/ProductSlice";
import { call, put } from "redux-saga/effects";
import { getData, oneData } from "../requests/products";
//import { fetchProducts, Product } from "../../features/ProductSlice";
import { AxiosResponse } from "axios";
import { Product, fetchProductSuccess, fetchProducts } from "../../features/ProductSlice";

export function* getProductsSaga() {
  try {
    const response: AxiosResponse<Product[]> = yield call(getData);
console.log(response)
     yield put(fetchProducts(response.data));
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}

export function* getSingleProductSaga(action: any) {
  try {
    const response: AxiosResponse<Product> = yield call(oneData, action.id);
 
      yield put(fetchProductSuccess(response.data));
    
    console.log(response)
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}
