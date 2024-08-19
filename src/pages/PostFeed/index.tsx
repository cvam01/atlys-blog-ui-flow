import PostCard from "@/components/PostCard";
import PostFeedHeader from "@/components/PostFeedHeader";
import PostTextField from "@/components/PostTextField";
import AlertDialogBox from "@/components/ui/AlertDialogBox";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { deletePost, postSelector } from "@/redux/slices/postFeedSlice";
import { useRef, useState } from "react";

import LoginFormCard from "@/components/LoginFormCard";
import RegisterFormCard from "@/components/RegisterFormCard";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const PostFeedPage = () => {
  const posts = useAppSelector(postSelector);
  const [showDeleteAlertDialog, setShowDeleteAlertDialog] = useState(false);

  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">Hiiii</main>
  );
};

export default PostFeedPage;
