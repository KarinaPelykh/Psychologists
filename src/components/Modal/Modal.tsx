import { useEffect, MouseEvent } from "react";
import { LogIn } from "../LogIn/LogIn";
import { Registration } from "../Registration/Registration";

type Modal = {
  isOpen: boolean;
  toggle: () => void;
  type: string | null;
};

export const Modal = ({ isOpen, toggle, type }: Modal) => {
  useEffect(() => {
    const handelClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggle();
        console.log(toggle());
      }
    };
    document.addEventListener("keydown", handelClose);
    return () => {
      document.removeEventListener("keydown", handelClose);
    };
  }, [toggle]);

  const handelClickClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handelClickClose}
          className="z-20 fixed  top-[0px]
  left-[0px] bg-[#191a1580] w-[100%] h-[100%] flex justify-center items-center"
        >
          {type === "Registration" && <Registration toggle={toggle} />}
          {type === "Log In" && <LogIn toggle={toggle} />}
        </div>
      )}
    </>
  );
};
