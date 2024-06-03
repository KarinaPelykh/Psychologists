import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

type Prop = {
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
  className?: string;
};

export const AuthNav = ({ isOpen, toggle, open, className }: Prop) => {
  const [type, setType] = useState<"Log In" | "Registration" | null>(null);
  const handelOpen = (type: "Log In" | "Registration") => {
    setType(type);
    open();
  };
  return (
    <div
      className={
        " mobil:flex-col mobil:mx-[auto] tablet:mr-[0px]  tablet:flex tablet:ml-auto   tablet:!flex-row"
      }
    >
      <Button
        iconShow={false}
        prop="Log In"
        className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] flex items-center mobil:mb-[10px] tablet:mb-[0px]"
        onClick={() => handelOpen("Log In")}
        styles={className}
      />
      <Button
        iconShow={false}
        prop="Registration"
        className="bg-[#FC832C] border rounded-[30px] px-[39px] py-[14px] text-white !h-[48px] !text-[16px] flex items-center"
        onClick={() => handelOpen("Registration")}
        styles={className}
      />
      <Modal isOpen={isOpen} toggle={toggle} type={type} />
    </div>
  );
};
