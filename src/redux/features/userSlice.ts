import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../configureStore";

interface UserState {
  user: User[];
}

interface User {
  
  email: string;
  userName: string;
  password: string;
}

const initialState: UserState = {
  user: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User[]>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
// export const selectUser = (state: RootState): User[] => state.user.user;
