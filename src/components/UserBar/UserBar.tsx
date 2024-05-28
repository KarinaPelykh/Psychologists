import { useSelector } from "react-redux";
import { userSelector } from "../../redux/Auth/AuthSelector";
import icon from "../../images/sprite.svg";
export const UserBar = () => {
  const userInfo = useSelector(userSelector);
  return (
    <div className="hidden tablet:flex items-center ml-[auto] mr-[28px]">
      <svg className="w-[40px] h-[40px] mr-[14px]">
        <use xlinkHref={icon + "#user"}></use>
      </svg>
      <p>{userInfo?.name}</p>
    </div>
  );
};
