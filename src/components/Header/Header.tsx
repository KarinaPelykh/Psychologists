import { useSelector } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { AuthNav } from "../Auth/Auth";
import { UserBar } from "../UserBar/UserBar";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { isLoginSelector } from "../../redux/Auth/AuthSelector";

export const Header = () => {
  const { isOpen, open, toggle } = useToggle();
  const isLogin = useSelector(isLoginSelector);
  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        {isLogin ? (
          <UserBar />
        ) : (
          <AuthNav isOpen={isOpen} open={open} toggle={toggle} />
        )}
      </nav>
    </header>
  );
};
