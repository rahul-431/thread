import * as z from "zod";
export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3, { message: "at least 3 char" }).max(50),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
