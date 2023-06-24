import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
// import { Product } from "./ProductSlice";

export interface Photos{
  id: number;
  url: string;
}
export interface cartProduct{
  id: number;
  productId: number;
  cartId:number;
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

export interface Cart {
  id: number;
  ProductId: number;
  cartId:number;
  quantity: number;
  Product: Product;
  Photos: Photos[];

}

export interface CartState {
  carts: Cart[];
}

const initialState: CartState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchCartItems: (state, action: PayloadAction<Cart[]>) => {
      const quantity = action.payload.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem('cartItemsCount', String(quantity));
      return {
        ...state,
        carts: action.payload,
      };
    },

    editIncremCartItems: (state, action: PayloadAction< Cart>) => {
      // console.log(action.payload, "hello");
        
            
      // state.carts.push(action.payload);
          
      const productId = action.payload;
      const cartItem = state.carts.find((item) => item.ProductId === +productId);

      if (cartItem && cartItem.quantity < cartItem.Product.count) {
        cartItem.quantity++;
      }
   
    },
    
  editDecremCartItems: (state, action: PayloadAction< Cart>) => {
      // console.log(action.payload, "hello");
    
      //   state.carts.push(action.payload);
      const productId = action.payload;
      const cartItem = state.carts.find((item) => item.ProductId ===+ productId);

      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      }
   
    }
    
    
    
    
    
  }

});

export default cartSlice.reducer;
export const { fetchCartItems,editIncremCartItems,editDecremCartItems } = cartSlice.actions;
export const cartItems = (state: RootState): Cart[] => state.cart.carts;




