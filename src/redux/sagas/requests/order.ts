import axios, { AxiosResponse, AxiosError } from "axios";
const token = localStorage.getItem("token");

export async function orderData(payload:any): Promise<AxiosResponse<any>> {

    try {
      const response: AxiosResponse<any> = await axios.post("http://localhost:3333/order/payment",
      payload,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        }
      });
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
 
  export async function getOrder(id:number): Promise<AxiosResponse<any>> {

    try {
      const response: AxiosResponse<any> = await axios.get(`http://localhost:3333/order/orderProducts/${id}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
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