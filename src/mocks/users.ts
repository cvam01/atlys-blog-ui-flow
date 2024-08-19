import { User } from "@/types/resource";

export const users: User[] = [
  {
    id: 2,
    username: "john_doe",
    email: process.env.REACT_LOGIN_EMAIL,
    password: process.env.REACT_LOGIN_PASSWORD,
    name: "John Doe",
    createdAt: "2024-07-04T20:01:22.128Z",
    profile_picture: "/user-images/user-1.png",
  },
  {
    id: 1,
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456",
    name: "Jane Smith",
    createdAt: "2024-07-04T20:01:22.128Z",
    profile_picture: "/user-images/user-2.png",
  },
];
