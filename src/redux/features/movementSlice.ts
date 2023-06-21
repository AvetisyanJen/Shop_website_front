import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";



export interface Movement {
  id: number;
  name: string;
}



 export interface MovementState {
  movements: Movement[];
}

const initialState: MovementState= {
  movements: [],
};

const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    fetchMovements: (state, action: PayloadAction<Movement[]>) => {
      return {
        ...state,
        movements: action.payload,
      };
    },
    
      
  },
});

export default movementSlice.reducer;
export const {fetchMovements } = movementSlice.actions;
export const allMovements = (state:RootState):Movement[]=> state.movement.movements