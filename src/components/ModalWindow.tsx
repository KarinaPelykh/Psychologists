import { useState, MouseEvent } from "react";
import { Button } from "./Button/Button";
import icon from "../images/sprite.svg";
import { Psychology } from "../type/Psycholog";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
type Prop = {
  isOpen: boolean;
  item: Psychology;
  toggle: () => void;
};

interface Client {
  [key: string]: string | number;
}
export const ModalWindow = ({ isOpen, item, toggle }: Prop) => {
  const [time, setTime] = useState("12:45");
  const [name, setName] = useState("");
  const [numberUser, setNumberUser] = useState("+380");
  const [email, setEmail] = useState("");

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  //   useEffect(() => {
  //     const handelClose = (e: KeyboardEvent) => {
  //       if (e.code === "Escape") {
  //         toggle();
  //         console.log(toggle());
  //       }
  //     };
  //     document.addEventListener("keydown", handelClose);
  //     return () => {
  //       document.removeEventListener("keydown", handelClose);
  //     };
  //   }, [toggle]);

  const handelIsOpen = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  const schema = yup
    .object({
      name: yup.string().required().trim(),
      email: yup.string().email().required().trim(),
      number: yup
        .number()
        .max(12, "must be at a little 12 characters long")
        .required(),
    })
    .required();
  const { handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ name, email, numberUser }: Client) => {
    console.log({ name, email, numberUser });

    reset();
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={handelIsOpen}
          className="z-20 fixed top-[0px] 
left-[0px] bg-[#191a1580] w-[100%] h-[100%] flex justify-center items-center"
        >
          <div
            className=" hidden-[auto]  bg-[#FBFBFB] px-[64px] py-[80px] tablet:py-[10px] w-[100vh] h-[100vh] tablet:w-[600px] tablet:max-h-[700px] 
             tablet:rounded-[30px] relative"
          >
            <button
              className="absolute top-[15px] right-[15px]"
              onClick={toggle}
            >
              <svg className="w-[32px] h-[32px]  stroke-black">
                <use xlinkHref={icon + "#close"}></use>
              </svg>
            </button>
            <form className="mobil:h-[100vh]" onSubmit={handleSubmit(onSubmit)}>
              <h1 className=" mobil:text-[20px] tablet:text-[35px]  text-center desktop:text-start desktop:text-[40px] font-medium tracking-[0.02rem] leading-[1.2] mb-[15px] ">
                Make an appointment with a psychologists
              </h1>
              <p className="mobil:hidden  tablet:flex tablet:text-[12px] desktop:w-[444px] text-start font-normal text-base leading-[1.25] text-[#191a158a] mb-[30px]">
                You are on the verge of changing your life for the better. Fill
                out the short form below to book your personal appointment with
                a professional psychologist. We guarantee confidentiality and
                respect for your privacy.
              </p>
              <div className="flex mb-[30px]">
                <img
                  className="rounded-[15px] w-[44px] h-[44px]"
                  src={item.avatar_url}
                  alt="psychology"
                />

                <div className=" ml-[14px]">
                  <p className=" text-[#191a158a]">Your psychologists</p>
                  <p>{item.name}</p>
                </div>
              </div>
              <input
                className=" outline-0 w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[10px]"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex  mb-[10px]">
                <input
                  className="outline-0 w-[100%]  h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mr-[8px]"
                  type="tel"
                  name="number"
                  placeholder="+380"
                  value={numberUser}
                  onChange={(e) => setNumberUser(e.target.value)}
                />
                <input
                  className="outline-0 w-[100%]  h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000]"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <input
                className="outline-0 w-[100%] h-[52px]  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000]  mb-[10px]"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Comment"
                className="outline-0  w-[100%] desktop:w-[472px]  resize-none  py-[16px] px-[18px] border rounded-[12px] placeholder:text-[#000] mb-[18px]"
              ></textarea>
              <Button
                iconShow={false}
                prop="Send"
                className="w-[100%] flex justify-center mobil:flex"
                onClick={toggle}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
