import { call,put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { loginUserData, registerData } from "../requests/user";
import Swal from "sweetalert2";
import { addUserFailure, loginUserFailure } from "../../features/userSlice";


export function* addUserSaga(action: any,) {
    try {
      const response: AxiosResponse<any> = yield call(registerData, action.data);
      console.log(response);
if(response.data){
  Swal.fire({
    title: '<strong>Email <u>verification</u></strong>',
    icon: 'info',
    html:'Please check your <b>email</b>' +
    '<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> link</a> ' +
    'and verify your email address to continue',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    
  })
} 

      // action.navigate("/login")
    } catch (error: any) {
      console.log(error.error);
      yield put(addUserFailure(error.error))
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
     action.navigate(-1)
    } catch (error: any) {
      if(error.message){
        Swal.fire({
          title: `<strong>${error.message}</strong>`,
          icon: 'info',
          html:'Please check your <b>email</b>' +
          '<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> link</a> ' +
          'and verify your email address to continue',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          
        })
      }
      console.log(error);
      yield put(loginUserFailure(error.error))
    }
  }