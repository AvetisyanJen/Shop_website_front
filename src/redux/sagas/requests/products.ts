import axios, { AxiosResponse, AxiosError } from "axios";

export async function getData(): Promise<AxiosResponse> {
  try {
    const response: AxiosResponse = await axios.get("http://localhost:3333/prod/products");
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (isNetworkError(axiosError)) {
        console.error("Network Error occurred:", error);
      } else {
        console.error("Other Axios Error occurred:", error);
      }
    } else {
      console.error("Other Error occurred:", error);
    }
    throw error;
  }
}

function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError !== undefined;
}

function isNetworkError(error: AxiosError): boolean {
  return error.code === 'ERR_NETWORK';
}



