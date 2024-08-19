export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  profile_picture: string;
  createdAt: string;
}

export interface Post {
  id: number;
  user_id: number;
  emoji: string;
  text: string;
  no_of_comments: number;
  created_at: string;
  is_edited: boolean;
  edited_time: string | null;
}
