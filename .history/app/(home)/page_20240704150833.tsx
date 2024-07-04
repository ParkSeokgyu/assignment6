"use client"

import { EmailIcon, PasswordIcon, UsernameIcon } from "@/components/Icons";
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { homeLogin } from "./actions";

export default function Home() {
  const [state, action] = useFormState(homeLogin, null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto flex flex-col gap-10">
        <h1 className="text-5xl text-center">🔥</h1>

        <form action={action} className="flex flex-col gap-5 w-full">
          <Input 
            name="email"
            type="email" 
            placeholder="email" 
            icon={<EmailIcon />} 
            required 
            errors={[]} 
          />
          <Input 
            name="username"
            type="text" 
            placeholder="이름" 
            icon={<UsernameIcon />} 
            required 
            errors={[]} 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="비밀번호" 
            icon={<PasswordIcon />} 
            required 
            errors={state?.errors ?? []} 
          />

          <Button text="Log in" />
        </form>

        {/* 수정: 성공 메시지 추가 */}
        {state?.success && (
          <div className="mt-2 p-4 bg-green-500 text-white font-medium rounded-full text-center">
            Welcome back!
          </div>
        )}
      </div>
    </div>
  );
}
