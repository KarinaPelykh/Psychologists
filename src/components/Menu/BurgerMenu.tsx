import { useSelector } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { AuthNav } from "../Auth/Auth";
import { Navigation } from "../Header/Navigation";
import { UserBar } from "../UserBar/UserBar";
import { userSelector } from "../../redux/Auth/AuthSelector";
import clsx from "clsx";

type Prop = {
  isOpenMenu: boolean;
  toggleMenu: () => void;
  className?: string;
};

export const BurgerMenu = ({ isOpenMenu, toggleMenu, className }: Prop) => {
  const { isOpen, open, toggle } = useToggle();
  const isLogin = useSelector(userSelector);
  return (
    <>
      {isOpenMenu && (
        <div
          className={clsx(
            className,
            "w-[100vw] h-[100vh] fixed top-0 left-0  z-40"
          )}
        >
          <div className="w-[100vw] h-[100vh] bg-[#fff]  absolute top-0 left-0 p-[30px]">
            <button onClick={toggleMenu}>Close</button>
            {isLogin && isLogin.name !== "" && (
              <UserBar className="!flex !flex-col" />
            )}
            <Navigation className="!flex !flex-col" />
            <AuthNav
              className="!flex"
              isOpen={isOpen}
              open={open}
              toggle={toggle}
            />
          </div>
        </div>
      )}
    </>
  );
};
