import { useAppSelector } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { postSelector } from "@/redux/slices/postFeedSlice";
import { useState } from "react";

import { LoginFormCard } from "@/widgets/LoginFormCard";
import { SignInFormCard } from "../../widgets/SignupCard";
import { PostFeedHeader } from "@/widgets/FeedHeader";
import { Dialog, DialogContent } from "@/components/Dialog";
import { PostCard } from "@/widgets/PostCard";
import { PostTextField } from "@/widgets/PostTextField";

const PostFeedPage = () => {
  const posts = useAppSelector(postSelector);
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">
      {user?.id ? (
        <div className="absolute right-2 top-0 p-4 text-xs text-white-100">
          {user?.username} •{" "}
          <button onClick={logout} className="underline">
            logout
          </button>
        </div>
      ) : (
        <button
          className="absolute right-2 top-0 p-4 text-xs text-white-100"
          onClick={() => setShowLoginModal(true)}
        >
          login
        </button>
      )}
      <PostFeedHeader className="mb-10" />
      <PostTextField setShowLoginModal={setShowLoginModal} className="mb-4" />
      <div className="flex flex-col gap-4">
        {!!posts?.length &&
          posts.map((post) => <PostCard key={post.id} {...post} />)}
      </div>

      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent>
          <LoginFormCard
            isOpenAsModal={true}
            onSuccess={() => setShowLoginModal(false)}
            onRegisterClick={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent>
          <SignInFormCard
            isOpenAsModal={true}
            onSuccess={() => setShowRegisterModal(false)}
            onLoginClick={() => {
              setShowLoginModal(true);
              setShowRegisterModal(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PostFeedPage;
