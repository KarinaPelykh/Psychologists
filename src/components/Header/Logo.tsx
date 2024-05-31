import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
export const Logo = () => {
  return (
    <Link to="/" className=" tablet:mr-[20px] desktop:mr-[130px]">
      <svg className="w-[218px] h-[26px]">
        <use xlinkHref={icon + "#Logo"}></use>
      </svg>
    </Link>
  );
};
