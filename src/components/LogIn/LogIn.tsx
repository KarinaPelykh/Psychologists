import { Button } from "../Button/Button";
import icon from "../../images/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../type/Auth";
import { loginThunk } from "../../redux/Auth/AuthOperation";
type Prop = {
  toggle: () => void;
};

const schema = yup
  .object({
    email: yup.string().email().required().trim(),
    password: yup
      .string()
      .min(6, "must be at more 6 characters long")
      .max(12, "must be at a little 12 characters long")
      .required()
      .trim(),
  })
  .required();
export const LogIn = ({ toggle }: Prop) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ email, password }: UserLogin) => {
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => navigate("/psychologists"));
    reset();
    toggle();
  };

  const handelIsShow = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#FBFBFB] p-[64px] w-[100vh] h-[100vh] tablet:w-[566px] tablet:h-[510px]  tablet:rounded-[30px] relative">
      <button className="absolute top-[15px] right-[15px]" onClick={toggle}>
        <svg className="w-[32px] h-[32px]  stroke-black">
          <use xlinkHref={icon + "#close"}></use>
        </svg>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" text-[40px] font-medium tracking-[0.02rem] leading-[1.2] mb-[20px]">
          Log In
        </h1>
        <p className="desktop:w-[408px] font-normal text-base leading-[1.25] text-[#191a158a] mb-[40px]">
          Welcome back!Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <div className="flex flex-col mb-[40px] relative">
          <input
            className=" outline-0 w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          <p className="absolute top-[52px] italic text-[10px]">
            {errors.email?.message}
          </p>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              className="outline-0 w-[100%]  h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000]"
              {...register("password")}
              name="password"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={handelIsShow}
              className="absolute top-[17px] right-[20px]"
            >
              <svg className="w-[18px] h-[18px] ">
                <use xlinkHref={icon + (show ? "#eye" : "#eye-blocked")}></use>
              </svg>
            </button>
          </div>

          <p className="absolute top-[122px] italic text-[10px]">
            {errors.password?.message}
          </p>
        </div>
        <Button
          iconShow={false}
          prop="Log In"
          className=" !w-[100%] !bg-[#FC832C] flex justify-center !h-[52px] rounded-[30px] items-center mobil:flex"
        />
      </form>
    </div>
  );
};
