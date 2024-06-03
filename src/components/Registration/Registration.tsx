import { Button } from "../Button/Button";
import icon from "../../images/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { registerThunk } from "../../redux/Auth/AuthOperation";
import { User } from "../../type/Auth";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
type Prop = {
  toggle: () => void;
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
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handelShow = () => {
    setShow(!show);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ name, email, password }: User) => {
    dispatch(registerThunk({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate("/psychologists");
        toast.success("You already registration");
      })
      .catch((error) => {
        toast.error(`You have ${error.message}`);
      });
    reset();
    toggle();
  };

  return (
    <div className="bg-[#FBFBFB] p-[30px] desktop:p-[64px]  w-[100vh] h-[100vh] tablet:w-[566px] tablet:h-[580px]  tablet:rounded-[30px] relative">
      <button
        className="absolute mobil:top-[30px] mobil:right-[20px] tablet:top-[15px] tablet:right-[15px]"
        onClick={toggle}
      >
        <svg className="w-[32px] h-[32px]  stroke-black">
          <use xlinkHref={icon + "#close"}></use>
        </svg>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" text-[40px] font-medium tracking-[0.02rem] leading-[1.2] mb-[20px]">
          Registration
        </h1>
        <p className="desktop:w-[408px] font-normal text-base leading-[1.25] text-[#191a158a] mb-[40px]">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <div className="flex flex-col mb-[40px] relative">
          <input
            className=" outline-0 w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
            {...register("name")}
            name="name"
            placeholder="Name"
          />
          <p className="absolute top-[52px] italic text-[10px]">
            {errors.name?.message}
          </p>
          <input
            className="outline-0 w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          <p className="absolute top-[122px] italic text-[10px]">
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
              onClick={handelShow}
              className="absolute top-[17px] right-[20px]"
            >
              <svg className="w-[18px] h-[18px] ">
                <use xlinkHref={icon + (show ? "#eye" : "#eye-blocked")}></use>
              </svg>
            </button>
          </div>

          <p className="absolute top-[191px] italic text-[10px]">
            {errors.password?.message}
          </p>
        </div>
        <Button
          iconShow={false}
          prop="Sign Up"
          className=" !w-[100%] !bg-[#FC832C] flex justify-center !h-[52px] rounded-[30px] items-center mobil:flex"
        />
      </form>
    </div>
  );
};
