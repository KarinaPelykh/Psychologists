import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        <div className="ml-auto">
          <button className="br-[transparent] border rounded-[30px] px-[39px] py-[14px] mr-[8px]">
            Log In
          </button>
          <button className="bg-[#FC832C] border rounded-[30px] px-[39px] py-[14px] text-white">
            Registration
          </button>
        </div>
      </nav>
    </header>
  );
};
