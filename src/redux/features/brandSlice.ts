import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";



export interface Brand {
  id: number;
  name: string;
}



 export interface BrandState {
  brands: Brand[];
}

const initialState: BrandState= {
  brands: [],
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    fetchBrands: (state, action: PayloadAction<Brand[]>) => {
      return {
        ...state,
        brands: action.payload,
      };
    },
    
      
  },
});

export default brandSlice.reducer;
export const {fetchBrands } = brandSlice.actions;
export const allBrands = (state:RootState):Brand[]=> state.brand.brands