import { useToggle } from "../../hook/useToggle";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        <div className="ml-auto flex">
          <Button
            iconShow={false}
            prop="Log In"
            className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] flex items-center"
            onClick={open}
          />
          <Button
            iconShow={false}
            prop="Registration"
            className="bg-[#FC832C] border rounded-[30px] px-[39px] py-[14px] text-white !h-[48px] !text-[16px] flex items-center"
          />
          <Modal isOpen={isOpen} close={close} />
        </div>
      </nav>
    </header>
  );
};
