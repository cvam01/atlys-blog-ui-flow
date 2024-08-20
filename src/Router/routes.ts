import { RouteType } from "./Router";
import LoginPage from "@/pages/Login";
import NotFoundPage from "@/pages/NotFound";
import PostFeedPage from "@/pages/PostFeed";
import SignupPage from "@/pages/Signup";

export const routes: RouteType[] = [
  {
    path: "/",
    Element: LoginPage,
    isProtected: false,
    isPublic: true,
  },
  {
    path: "/login",
    Element: LoginPage,
    isProtected: false,
    isPublic: true,
  },
  {
    path: "/register",
    Element: SignupPage,
    isProtected: false,
    isPublic: true,
  },
  {
    path: "/feed",
    Element: PostFeedPage,
    isProtected: false,
  },
  {
    path: "*",
    Element: NotFoundPage,
    isProtected: false,
  },
];
