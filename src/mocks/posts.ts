import { Post } from "@/types/resource";

export const posts: Post[] = [
  {
    user_id: 1,
    id: 1,
    emoji: "😊",
    text: "Hello there!",
    no_of_comments: 4,
    created_at: "2024-07-04T20:01:22.128Z",
    is_edited: true,
    edited_time: "2024-07-04T20:10:30.128Z",
  },
  {
    user_id: 2,
    id: 2,
    emoji: "😢",
    text: "Not feeling well today",
    no_of_comments: 4,
    created_at: "2024-07-04T20:01:22.128Z",
    is_edited: false,
    edited_time: "2024-07-04T20:10:30.128Z",
  },
];
