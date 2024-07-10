"use client"
import { EmailIcon, PasswordIcon, UsernameIcon } from "@/components/Icons";
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {

  const [state, action] = useFormState(createAccount, null)

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-8 px-6 max-w-screen-sm mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">안녕하세요!</h1>
        <h2 className="text-xl">아래 양식을 작성하여 가입하세요!</h2>
      </div>

      <form action={action} className="flex flex-col gap-3">
        <Input 
          name="username" 
          type="text" 
          placeholder="이름" 
          icon={<UsernameIcon />} 
          required 
          errors={state?.fieldErrors.username} 
        />
        <Input 
          name="email" 
          type="email" 
          placeholder="email" 
          icon={<EmailIcon />} 
          required 
          errors={state?.fieldErrors.email}   
        />
        <Input 
          name="password" 
          type="password" 
          placeholder="비밀번호" 
          icon={<PasswordIcon />} 
          // minLength={PASSWORD_MIN_LENGTH}
          required 
          errors={state?.fieldErrors.password}  
        />
        <Input 
          name="confirm_password" 
          type="password" 
          placeholder="비밀번호 확인" 
          icon={<PasswordIcon />} 
          // minLength={PASSWORD_MIN_LENGTH}
          required 
          errors={state?.fieldErrors.confirm_password}   
        />

        <Button text="계정 만들기" />
      </form>
    </div>
  )
}