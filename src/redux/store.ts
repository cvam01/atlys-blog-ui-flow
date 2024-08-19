import authSliceReducer from "./slices/authSlice";
import postFeedSliceReducer from "./slices/postFeedSlice";
import usersSliceReducer from "./slices/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "postFeed", "users"],
};

const rootReducer = combineReducers({
  postFeed: postFeedSliceReducer,
  auth: authSliceReducer,
  users: usersSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
