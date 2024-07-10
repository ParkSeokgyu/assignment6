"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";
import getSession from "@/lib/session";
import db from "@/lib/db";
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

// 이메일이 있는 사용자 찾기
const checkEmailExists = async(email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user); // user가 존재한다면 true를 리턴
}

const formSchema = z.object({
  email: z
    .string()
    .email("유효하지 않은 이메일입니다.")
    .toLowerCase()
    .refine(checkEmailExists, "이 이메일을 사용하는 계정이 존재하지 않습니다."),,
  password: z
    .string({
      required_error: "비밀번호를 입력하세요."
    })
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR)
});


export async function login (prevState:any, formData: FormData) {

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.spa(data);
  if (!result.success) { // 성공하지 못하면
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );
    if(ok) {
      const session = await getSession();
      session.id = user!.id
      await session.save();
      redirect("/profile")
    } else {
      return {
        fieldErrors: {
          password: ["비밀번호가 잘못되었습니다."],
          email: [],
        }
      }
    }
  }
}
