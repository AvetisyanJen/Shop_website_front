import axios, { AxiosResponse, AxiosError } from "axios";

export async function registerData(userData:any): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios.post("http://localhost:3333/user/register",userData);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (isNetworkError(axiosError)) {
        console.error("Network Error occurred:", error);
      } else {
        console.error("Other Axios Error occurred:", error);
      }
      throw axiosError.response?.data; // Throw the response data as the error
    } else {
      console.error("Other Error occurred:", error);
      throw error;
    }
  }
}


export async function loginUserData(userData:any): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios.post("http://localhost:3333/user/login",userData);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (isNetworkError(axiosError)) {
        console.error("Network Error occurred:", error);
      } else {
        console.error("Other Axios Error occurred:", error);
      }
      throw axiosError.response?.data; // Throw the response data as the error
    } else {
      console.error("Other Error occurred:", error);
      throw error;
    }
  }
}

function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError !== undefined;
}

function isNetworkError(error: AxiosError): boolean {
  return error.code === 'ERR_NETWORK';
}




