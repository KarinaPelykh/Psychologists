import { Button } from "../Button/Button";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        <div className="ml-auto flex">
          <Button
            iconShow={false}
            prop="Log In"
            className="bg-[transparent] border rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] text-[#000] !h-[48px] !text-[16px] flex items-center"
          />
          <Button
            iconShow={false}
            prop="Registration"
            className="bg-[#FC832C] border rounded-[30px] px-[39px] py-[14px] text-white !h-[48px] !text-[16px] flex items-center"
          />
        </div>
      </nav>
    </header>
  );
};
