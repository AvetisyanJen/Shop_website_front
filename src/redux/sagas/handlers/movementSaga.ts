import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { Movement, fetchMovements } from "../../features/movementSlice";
import { getMovement } from "../requests/movement";

export function* getMovementSaga() {
  try {
    const response: AxiosResponse<Movement[]> = yield call(getMovement);

     yield put(fetchMovements(response.data));
     console.log("aaaaaaaaaaaaaaaaaaaaaaa",response.data)
    // console.log(response);
  } catch (error: any) {
    console.error(error);
    // Handle error if needed
  }
}