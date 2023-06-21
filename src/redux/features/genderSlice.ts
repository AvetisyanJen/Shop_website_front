import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";



export interface Gender {
  id: number;
  name: string;
}



 export interface GenderState {
  genders: Gender[];
}

const initialState: GenderState= {
  genders: [],
};

const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    fetchGenders: (state, action: PayloadAction<Gender[]>) => {
      return {
        ...state,
        genders: action.payload,
      };
    },
    
      
  },
});

export default genderSlice.reducer;
export const {fetchGenders } = genderSlice.actions;
export const allGenders = (state:RootState):Gender[]=> state.gender.genders