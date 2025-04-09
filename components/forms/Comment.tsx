"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentValidation } from "@/lib/validations/thread";
import { z } from "zod";w
import { Input } from "../ui/input";
import Image from "next/image";
import { addComment } from "@/lib/actions/thread.action";
interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}
const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(commentValidation),
  });
  const onSubmit = async (values: z.infer<typeof commentValidation>) => {
    await addComment(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );
    form.reset();
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
          <FormField
            control={form.control}
            name="thread"
            render={({ field }) => (
              <FormItem className="flex w-full items-center gap-3">
                <FormLabel>
                  <Image
                    src={currentUserImg}
                    alt="User Image"
                    height={48}
                    width={48}
                    className="rounded-full object-cover"
                  />
                </FormLabel>
                <FormControl className="border-none bg-transparent">
                  <Input
                    type="text"
                    placeholder="Comment please"
                    className="text-light-1 outline-none no-focus"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="comment-form_btn">
            Reply
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Comment;
