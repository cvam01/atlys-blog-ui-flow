import { RootState } from "@/redux/store";
import { User } from "@/types/resource";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthSlice {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthSlice = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

const authSliceReducer = authSlice.reducer;

export default authSliceReducer;
