import ChatBubble from "@/assets/chat-buble.svg";
import { useAppSelector } from "@/hooks/redux";
import { cn } from "@/utils/stringUtils";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "@/types/resource";
import { selectUserById } from "@/redux/slices/userSlice";
import { IconWrapper } from "@/tokens/IconWrapper";
import Card from "@/components/card";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

interface PostCardProps extends Post {
  className?: string;
}

export const PostCard = ({
  className,
  created_at,
  emoji,
  is_edited,
  no_of_comments,
  text,
  user_id,
}: PostCardProps) => {
  const user = useAppSelector(selectUserById(user_id));
  return (
    <>
      <Card className={cn(className)}>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {user?.profile_picture && (
              <img
                src={user?.profile_picture}
                alt={`profile picture of ${user?.name}`}
                className="h-11 w-11 rounded-full"
              />
            )}
            <div>
              <h2 className="text-base font-medium leading-none text-white-200">
                {user?.name}
              </h2>
              <p className="mt-1 text-sm font-medium leading-none text-white-150">
                {dayjs(created_at).fromNow()} {is_edited && "Edited"}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-3 flex items-center gap-4 rounded-lg bg-black-700 p-4">
          <IconWrapper className="self-start">{emoji}</IconWrapper>
          <p className="text-base font-normal text-white-150">{text}</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <img src={ChatBubble} alt="eye icon" />
          <span className="text-sm font-medium text-white-150">
            {no_of_comments} comments
          </span>
        </div>
      </Card>
    </>
  );
};
