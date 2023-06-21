import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface Photos {
 id:number,
  url: string;
}

export interface Category {
  id: number;
  name: string;
}
export interface Brand {
  id: number;
  name: string;
}
export interface Movement{
  id: number;
  name: string;
}
export interface Gender{
  id: number;
  name: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  categoryId: number;
  Category: Category;
  Movement: Movement;
  Brand: Brand; 
  Photos: Photos[];
  gender:Gender;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export default productSlice.reducer;
export const {fetchProducts } = productSlice.actions;
export const allProducts = (state:RootState):Product[]=> state.product.products
