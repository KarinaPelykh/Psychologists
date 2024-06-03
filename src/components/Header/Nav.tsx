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
import icon from "../../images/sprite.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { isOpen, open, toggle } = useToggle();
  const dispatch = useAppDispatch();
  const IsUser = useSelector(userSelector);
  const logOut = () => {
    dispatch(LogOut())
      .unwrap()
      .then(() => {
        toast.success("You log out success");
      })
      .catch((error) => {
        toast.error(`You have ${error}`);
      });
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="flex items-center justify-center  tablet:justify-start  ">
      <Logo />
      <Navigation className="md:hidden" />
      {IsUser && IsUser.name !== "" ? (
        <>
          <UserBar />
          <Button
            iconShow={false}
            prop="Log out"
            className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] flex items-center tablet:flex "
            onClick={logOut}
          />
        </>
      ) : (
        <AuthNav
          isOpen={isOpen}
          open={open}
          toggle={toggle}
          className="tablet:flex "
        />
      )}
      <button className="  mdMin:hidden" onClick={toggleMenu}>
        <svg className="w-[24px] h-[24px] stroke-[#000] ml-[20px] ">
          <use xlinkHref={icon + "#menu"}></use>
        </svg>
      </button>
      <BurgerMenu isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
    </nav>
  );
};
