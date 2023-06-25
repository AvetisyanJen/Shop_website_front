import axios, { AxiosResponse, AxiosError } from "axios";

export async function addCart(payload: any): Promise<AxiosResponse> {
  const token = localStorage.getItem("token");
  
  try {
    const response: AxiosResponse = await axios.post(
      "http://localhost:3333/cartProd/addcartProd",
      payload,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 0) {
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


export async function getCart(id: number): Promise<AxiosResponse> {
  try {
    const token = localStorage.getItem("token");

    const response: AxiosResponse = await axios.get(
      `http://localhost:3333/cartProd/getCartProduct/${id}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 0) {
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



export async function incrQuantity(payload: any): Promise<AxiosResponse> {
  const token = localStorage.getItem("token");
  try {
    const response: AxiosResponse = await axios.put(
      "http://localhost:3333/cartProd/increment",
      payload,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 0) {
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


export async function decrQuantity(payload: any): Promise<AxiosResponse> {
  const token = localStorage.getItem("token");
  try {
    const response: AxiosResponse = await axios.put(
      "http://localhost:3333/cartProd/decrement",
      payload,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 0) {
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


export async function deleteCart(payload: any): Promise<AxiosResponse> {
  const token = localStorage.getItem("token");
  try {
    const response: AxiosResponse = await axios.delete(
      "http://localhost:3333/cartProd/delete",
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        data: payload, // Move the payload to the `data` property
      }
    );
    return response;
  } catch (error:any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 0) {
        console.error("Network Error occurred:", axiosError.message);
      } else {
        console.error("Other Axios Error occurred:", axiosError.message);
      }
    } else {
      console.error("Other Error occurred:", error.message);
    }
    throw error;
  }
}

