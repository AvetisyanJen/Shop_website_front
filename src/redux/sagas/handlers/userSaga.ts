import { call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { loginUserData, registerData } from "../requests/user";


export function* addUserSaga(action: any,) {
    try {
      const response: AxiosResponse<any> = yield call(registerData, action.data);
      console.log(response);
      action.navigate("/login")
    } catch (error: any) {
      console.error(error);
    }
  }
  export function* loginUserSaga(action: any,) {
    try {
      const response: AxiosResponse<any> = yield call(loginUserData, action.data);
      console.log(response);
  
      const token = response.data.jwt;
      console.log(token);
      localStorage.setItem('token', token);
  
      if (response.data.user.role === 1) {
        action.navigate("/adminpage");
      }
    } catch (error: any) {
      console.error(error);
    }
  }