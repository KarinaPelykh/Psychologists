import { useSelector } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { AuthNav } from "../Auth/Auth";
import { Navigation } from "../Header/Navigation";
import { UserBar } from "../UserBar/UserBar";
import { userSelector } from "../../redux/Auth/AuthSelector";

import icon from "../../images/sprite.svg";
import { useAppDispatch } from "../../hooks/useDispatch";
import { LogOut } from "../../redux/Auth/AuthOperation";
import { Button } from "../Button/Button";
import clsx from "clsx";
type Prop = {
  isOpenMenu: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({ isOpenMenu, toggleMenu }: Prop) => {
  const { isOpen, open, toggle } = useToggle();
  const isLogin = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(LogOut());
  };
  return (
    <>
      <div
        className={clsx(
          isOpenMenu
            ? "translate-x-full transition duration-250 ease-linear"
            : "translate-x-0  transition duration-250	ease-linear",
          "w-[100vw] h-[100vh] fixed top-0 left-0  z-40"
        )}
      >
        <div className="w-[100vw] h-[100vh] tablet:w-[50vw] bg-gradient-to-br from-white to-[#fe6c04]   absolute top-0 left-0 p-[30px] tablet:left-[50%] flex flex-col items-center justify-center">
          <button onClick={toggleMenu}>
            <svg className="w-[24px] h-[24px] stroke-[#000] absolute top-[20px] right-[20px]">
              <use xlinkHref={icon + "#close"}></use>
            </svg>
          </button>
          {isLogin && isLogin.name !== "" && (
            <UserBar className="!flex !m-[0px] !mb-[20px] text-[20px] italic" />
          )}
          <Navigation className="!flex !flex-col w-[100%]" />
          {isLogin && isLogin.name !== "" ? (
            <Button
              iconShow={false}
              prop="Log out"
              className="bg-[transparent] border !border-[#191a159e] rounded-[30px] !px-[39px] !py-[14px]  mr-[8px] !text-[#000] !h-[48px] !text-[16px] mobil:flex items-center  tablet:hidden mobil:bg-[#fff]"
              onClick={logOut}
            />
          ) : (
            <AuthNav
              className="!flex  "
              isOpen={isOpen}
              open={open}
              toggle={toggle}
            />
          )}
        </div>
      </div>
    </>
  );
};
