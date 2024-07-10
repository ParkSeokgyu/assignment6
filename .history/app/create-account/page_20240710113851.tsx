import Button from "@/components/button";
import Input from "@/components/input";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="w-full max-w-md mx-auto flex flex-col gap-5">
        <h1>안녕하세요!</h1>
        <h2>아래 양식을 작성하여 가입하세요!</h2>
      </div>

      <form action="" className="flex flex-col gap-5 w-full">
        <Input 
          name="username" 
          type="text" 
          placeholder="이름" 
          required 
          // errors={state?.fieldErrors.username} 
        />
        <Input 
          name="email" 
          type="email" 
          placeholder="email" 
          required 
          // errors={state?.fieldErrors.email}   
        />
        <Input 
          name="password" 
          type="password" 
          placeholder="비밀번호" 
          // minLength={PASSWORD_MIN_LENGTH}
          required 
          // errors={state?.fieldErrors.password}  
        />
        <Input 
          name="confirm_password" 
          type="password" 
          placeholder="비밀번호 확인" 
          // minLength={PASSWORD_MIN_LENGTH}
          required 
          // errors={state?.fieldErrors.confirm_password}   
        />

        <Button text="계정 만들기" />
      </form>
    </div>
  )
}