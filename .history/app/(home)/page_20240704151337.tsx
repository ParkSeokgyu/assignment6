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
          <div className=" bg-green-500 rounded-2xl relative">
            <div className="absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

            </div>
            <div className="font-bold pl-10">
              Welcome back!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
