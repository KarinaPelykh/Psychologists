import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

type Prop = {
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
};

export const AuthNav = ({ isOpen, toggle, open }: Prop) => {
  const [type, setType] = useState<"Log In" | "Registration" | null>(null);
  const handelOpen = (type: "Log In" | "Registration") => {
    setType(type);
    open();
  };
  return (
    <div className="ml-auto flex">
      <Button
        iconShow={false}
        prop="Log In"
        className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] flex items-center"
        onClick={() => handelOpen("Log In")}
      />
      <Button
        iconShow={false}
        prop="Registration"
        className="bg-[#FC832C] border rounded-[30px] px-[39px] py-[14px] text-white !h-[48px] !text-[16px] flex items-center"
        onClick={() => handelOpen("Registration")}
      />
      <Modal isOpen={isOpen} toggle={toggle} type={type} />
    </div>
  );
};
