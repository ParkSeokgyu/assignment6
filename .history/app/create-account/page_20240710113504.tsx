import Input from "@/components/input";

export default function CreateAccount() {
  return (
    <div>
      <div>
        <h1>안녕하세요!</h1>
        <h2>아래 양식을 작성하여 가입하세요!</h2>
      </div>

      <form action="">
        <Input 
          name="username"
          type="text" 
          placeholder="이름" 
          required
        />
      </form>
    </div>
  )
}