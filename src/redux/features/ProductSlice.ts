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
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,

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
    fetchProductSuccess: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        loading: false,
        selectedProduct: action.payload,
      };
    },
  },
});

export default productSlice.reducer;
export const {fetchProducts,  fetchProductSuccess, } = productSlice.actions;
export const allProducts = (state:RootState):Product[]=> state.product.products
export const getSelectedProduct = (state: RootState): Product | null =>
  state.product.selectedProduct;
