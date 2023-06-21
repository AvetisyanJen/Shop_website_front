import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Gender } from "../../features/ProductSlice";
import { getGender } from "../requests/gender";
import { fetchGenders } from "../../features/genderSlice";


export function* getGenderSaga() {
  try {
    const response: AxiosResponse<Gender[]> = yield call(getGender);

     yield put(fetchGenders(response.data));
     console.log("aaaaaaaaaaaaaaaaaaaaaaa",response.data)
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}