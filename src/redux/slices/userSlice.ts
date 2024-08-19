import { users } from "@/mocks/users";
import { RootState } from "@/redux/store";
import { User } from "@/types/resource";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  users: User[];
  idCounter: number;
}

const initialState: UserState = {
  users: users,
  idCounter: users.length,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.idCounter += state.idCounter;
      const id = state.idCounter;
      state.users = [...state.users, { ...action.payload, id }];
    },
  },
});

export const { addUser } = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const selectUserById = (userId: number) => (state: RootState) =>
  state.users.users.find((user) => user.id === userId);

const usersSliceReducer = usersSlice.reducer;

export default usersSliceReducer;
