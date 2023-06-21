import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";



export interface Category {
  id: number;
  name: string;
}



 export interface CategoryState {
  categorys: Category[];
}

const initialState: CategoryState = {
  categorys: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategorys: (state, action: PayloadAction<Category[]>) => {
      return {
        ...state,
        categorys: action.payload,
      };
    },
    createCategory: (state, action: PayloadAction<Category>) => {
        console.log(action.payload, "hello");
      
          state.categorys.push(action.payload);
     
      },
      
  },
});

export default categorySlice.reducer;
export const {fetchCategorys,createCategory } = categorySlice.actions;
export const allCategorys = (state:RootState):Category[]=> state.category.categorys
