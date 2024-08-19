import { useAppDispatch } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { addPost } from "@/redux/slices/postFeedSlice";
import { cn } from "@/utils/stringUtils";
import { useFormik } from "formik";
import { useRef } from "react";
import { toast } from "sonner";

import * as Yup from "yup";
import Card from "@/components/card";
import Textfield from "@/components/TextField";
import Button from "@/components/button";

interface PostTextFieldProps {
  className?: string;
  setShowLoginModal(s: boolean): void;
}

export const postFormInitialValues = {
  emoji: "💬",
  text: "",
};

export const postFormSchema = Yup.object({
  emoji: Yup.string().required("Emoji is required"),
  text: Yup.string()
    .max(500, "Please limit your input to 500 characters.")
    .required("Please write at least one character."),
});

export const PostTextField = ({
  className,
  setShowLoginModal,
}: PostTextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: postFormSchema,
    initialValues: postFormInitialValues,
    onSubmit: (values) => {
      if (user?.id) {
        dispatch(
          addPost({
            created_at: new Date().toISOString(),
            edited_time: null,
            emoji: values.emoji,
            id: 0,
            is_edited: false,
            no_of_comments: 4,
            text: values.text,
            user_id: user.id,
          })
        );
        formik.resetForm();
        toast.success("Your post was sent.", { duration: 3000 });
      } else {
        setShowLoginModal(true);
      }
    },
  });
  const focusInputBox = () => {
    inputRef.current?.focus();
  };

  return (
    <Card className={cn(className)}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-medium leading-none text-white-200">
          Create post
        </h2>
        <div>
          <div
            onClick={focusInputBox}
            className="flex cursor-text items-center gap-4 rounded-lg bg-black-700 p-4"
          >
            <Textfield
              ref={inputRef}
              onChange={formik.handleChange}
              name="text"
              autoFocus
              className="w-full"
              value={formik.values.text}
              inputClassName="border-none pl-0 pr-0"
              placeholder="How are you feeling today?"
            />
          </div>
          {formik.errors.text && formik.touched.text && (
            <p className="mt-1 text-xs text-red-400">{formik.errors.text}</p>
          )}
        </div>
        <Button
          disabled={!formik.values.text}
          type="submit"
          className="items-end self-end px-[38px]"
        >
          Post
        </Button>
      </form>
    </Card>
  );
};
