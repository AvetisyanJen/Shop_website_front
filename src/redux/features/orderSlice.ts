import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
// import { Product } from "./ProductSlice";

export interface Photos{
  id: number;
  url: string;
}
export interface orderProduct{
  id: number;
  product_id: number;
  order_id:number;
  quantity:number
}
export interface Product {
  id: number;
  name: string;
  count:number;
  description: string;
  price:number
  Photos: Photos[];

}

export interface Order {
  id: number;
  product_id: number;
  order_id:number;
  quantity: number;
  total:number;
  Product: Product;
  Photos: Photos[];

}

export interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrderProduct: (state, action: PayloadAction<Order[]>) => {
      return {
        ...state,
        orders: action.payload,
      };
    }, 
    
  }

});

export default orderSlice.reducer;
export const { getOrderProduct } = orderSlice.actions;
export const orderItems = (state: RootState): Order[] => state.order.orders;
