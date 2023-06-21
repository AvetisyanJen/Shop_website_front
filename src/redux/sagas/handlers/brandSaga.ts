import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";



import { Brand, fetchBrands } from "../../features/brandSlice";
import { getBrand } from "../requests/brand";

export function* getBrandSaga() {
  try {
    const response: AxiosResponse<Brand[]> = yield call(getBrand);

     yield put(fetchBrands(response.data));
     console.log("aaaaaaaaaaaaaaaaaaaaaaa",response.data)
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}