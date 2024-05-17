import { useSelector } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { AuthNav } from "../Auth/Auth";
import { UserBar } from "../UserBar/UserBar";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { userSelector } from "../../redux/Auth/AuthSelector";
import { Button } from "../Button/Button";
import { LogOut } from "../../redux/Auth/AuthOperation";
import { useAppDispatch } from "../../hooks/useDispatch";

export const Header = () => {
  const { isOpen, open, toggle } = useToggle();
  const dispatch = useAppDispatch();
  const IsUser = useSelector(userSelector);

  const logOut = () => {
    dispatch(LogOut());
  };
  return (
    <header className="border py-6 px-32  ">
      <nav className="flex items-center">
        <Logo />
        <Navigation />
        {IsUser?.name ? (
          <>
            <UserBar />
            <Button
              iconShow={false}
              prop="Log out"
              className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] flex items-center"
              onClick={logOut}
            />
          </>
        ) : (
          <AuthNav isOpen={isOpen} open={open} toggle={toggle} />
        )}
      </nav>
    </header>
  );
};
