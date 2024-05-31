import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useToggle } from "../../hooks/useToggle";
import { AuthNav } from "../Auth/Auth";
import { Button } from "../Button/Button";
import { BurgerMenu } from "../Menu/BurgerMenu";
import { UserBar } from "../UserBar/UserBar";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { userSelector } from "../../redux/Auth/AuthSelector";
import { LogOut } from "../../redux/Auth/AuthOperation";
import { useState } from "react";

export const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log(isOpenMenu);

  const { isOpen, open, toggle } = useToggle();
  const dispatch = useAppDispatch();
  const IsUser = useSelector(userSelector);
  const logOut = () => {
    dispatch(LogOut());
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="flex items-center justify-center  tablet:justify-start  ">
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
      <button className="tablet:hidden" onClick={toggleMenu}>
        Menu
      </button>
      <BurgerMenu
        isOpenMenu={isOpenMenu}
        toggleMenu={toggleMenu}
        className="tablet:hidden"
      />
    </nav>
  );
};