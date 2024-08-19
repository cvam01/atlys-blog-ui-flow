import { posts } from "@/mocks/posts";
import { RootState } from "@/redux/store";
import { Post } from "@/types/resource";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostFeedStateType {
  posts: Post[];
  idCounter: number;
}

const initialState: PostFeedStateType = {
  posts: posts,
  idCounter: posts.length,
};

export const postFeedSlice = createSlice({
  name: "postFeed",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.idCounter += state.idCounter;
      const id = state.idCounter;
      state.posts = [{ ...action.payload, id }, ...state.posts];
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postFeedSlice.actions;

export const postSelector = (state: RootState) => state.postFeed.posts;

const postFeedSliceReducer = postFeedSlice.reducer;

export default postFeedSliceReducer;
