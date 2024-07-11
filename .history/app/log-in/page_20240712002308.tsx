"use client"
import { EmailIcon, PasswordIcon, UsernameIcon } from "@/components/Icons";
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { login } from "./actions";

export default function Login() {

  const [state, action] = useFormState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-center my-3">
          <h1 className="text-2xl font-bold">로그인!</h1>
          <h2 className="text-sm font-medium ">이메일과 비밀번호로 로그인합니다.</h2>
        </div>

        <form action={action} className="flex flex-col gap-5 w-full">
          <Input 
            name="email"
            type="email" 
            placeholder="email" 
            icon={<EmailIcon />} 
            required 
            errors={state?.fieldErrors?.email} 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="비밀번호" 
            icon={<PasswordIcon />} 
            required 
            errors={state?.fieldErrors?.password} 
          />

          <Button text="Log in" />
        </form>

      </div>
    </div>
  );
}