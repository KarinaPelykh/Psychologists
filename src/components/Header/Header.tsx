import { useToggle } from "../../hook/useToggle";
import { AuthNav } from "../Auth/Auth";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const { isOpen, open, toggle } = useToggle();

  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        <AuthNav isOpen={isOpen} open={open} toggle={toggle} />
      </nav>
    </header>
  );
};
