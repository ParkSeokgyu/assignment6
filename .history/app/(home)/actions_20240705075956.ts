"use server"

import { z } from "zod";

const formSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string()
})

export async function homeLogin(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) { // 성공하지 못하면
    console.log(result.error.flatten()); // 에러메세지 보여줘
    return result.error.flatten();
  } else {
    console.log(result.data) // 성공한 데이터 보여줘
  }
}

