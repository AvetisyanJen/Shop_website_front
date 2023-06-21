import axios, { AxiosResponse, AxiosError } from "axios";


export async function getGender(): Promise<AxiosResponse<any>> {
    const token = localStorage.getItem("token");
    try {
        const response: AxiosResponse = await axios.get(
        "http://localhost:3333/gender/get",
  
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
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