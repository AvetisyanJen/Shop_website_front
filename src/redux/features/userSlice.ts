import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: User[];
  error: string | null;
}

interface User {
  email: string;
  userName: string;
  password: string;
}

const initialState: UserState = {
  user: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User[]>) => {
      state.user = action.payload;
      state.error = null;
    },
    addUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, addUserFailure,loginUserFailure } = userSlice.actions;

//  export const selectUser = (state: RootState): User[] => state.user.user;
