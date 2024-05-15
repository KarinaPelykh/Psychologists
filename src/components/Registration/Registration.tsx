import { Button } from "../Button/Button";
import icon from "../../images/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type Prop = {
  toggle: () => void;
};

type User = {
  name: string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    name: yup.string().required().trim(),
    email: yup.string().email().required().trim(),
    password: yup
      .string()
      .min(6, "must be at more 6 characters long")
      .max(12, "must be at a little 12 characters long")
      .required()
      .trim(),
  })
  .required();

export const Registration = ({ toggle }: Prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: User) => {
    console.log(data);
    reset();
    setTimeout(() => {
      toggle();
    }, 200);
  };

  return (
    <div className="bg-[#FBFBFB] p-[64px] w-[566px] h-[580px]  rounded-[30px] relative">
      <button className="absolute top-[15px] right-[15px]" onClick={toggle}>
        <svg className="w-[32px] h-[32px]  stroke-black">
          <use xlinkHref={icon + "#close"}></use>
        </svg>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" text-[40px] font-medium tracking-[0.02rem] leading-[1.2] mb-[20px]">
          Registration
        </h1>
        <p className="w-[408px] font-normal text-base leading-[1.25] text-[#191a158a] mb-[40px]">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <div className="flex flex-col mb-[40px]">
          <input
            className="w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
            {...register("name")}
            name="name"
            placeholder="Name"
          />
          <p>{errors.name?.message}</p>
          <input
            className="w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
          <input
            className="w-[100%]  h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000]"
            {...register("password")}
            name="password"
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <Button
          iconShow={false}
          prop="Sign Up"
          className=" !w-[100%] !bg-[#FC832C] flex justify-center !h-[52px] rounded-[30px] items-center"
        />
      </form>
    </div>
  );
};
