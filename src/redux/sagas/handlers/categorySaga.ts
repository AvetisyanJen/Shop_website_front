import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { addCategory, getCategory } from "../requests/category";
import { Category, createCategory, fetchCategorys } from "../../features/categorySlice";

export function* getCategorySaga() {
  try {
    const response: AxiosResponse<Category[]> = yield call(getCategory);

     yield put(fetchCategorys(response.data));
    //  console.log("aaaaaaaaaaaaaaaaaaaaaaa",response.data)
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}


export function* addCategorySaga(action:any) {
    try {
      const response: AxiosResponse<Category> = yield call(addCategory,action);
  console.log(response)
       yield put(createCategory(response.data));
      // console.log(response);
    } catch (error: any) {
      console.error(error);
      // Handle error if needed
    }
  }
  