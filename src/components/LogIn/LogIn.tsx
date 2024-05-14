import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../Button/Button";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelChangesEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handelChangesPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = { email, password };

    console.log(user);
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <h1 className=" text-[40px] font-medium tracking-[0.02rem] leading-[1.2] mb-[20px]">
        Log In
      </h1>
      <p className="w-[408px] font-normal text-base leading-[1.25] text-[#191a158a] mb-[40px]">
        Welcome back!Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <div className="flex flex-col mb-[40px]">
        <input
          className="w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handelChangesEmail}
        />
        <input
          className="w-[100%]  h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000]"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handelChangesPassword}
        />
      </div>
      <Button
        iconShow={false}
        prop="Log In"
        className=" !w-[100%] !bg-[#FC832C] flex justify-center !h-[52px] rounded-[30px] items-center"
      />
    </form>
  );
};
