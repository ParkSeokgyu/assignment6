"use server"

import { EMAIL_REGEX, EMAIL_REQUIRED_VALUE, PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR, PASSWORD_REGEX, PASSWORD_REGEX_ERROR, USERNAME_MIN_LENGTH, USERNAME_MIN_LENGTH_ERROR } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z
  .string()
  .email("유효하지 않은 이메일입니다.")
  .toLowerCase()
  .regex(EMAIL_REGEX, EMAIL_REQUIRED_VALUE),

  username: z
  .string()
  .min(USERNAME_MIN_LENGTH, USERNAME_MIN_LENGTH_ERROR),

  password: z
  .string({
    required_error: "비밀번호를 입력하세요."
  })
  .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR)
  .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR)
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
