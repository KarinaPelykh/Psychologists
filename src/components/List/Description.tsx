import { useState } from "react";
import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useFavorite } from "../../hooks/useContext";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/Auth/AuthSelector";
interface Item {
  item: Psychology;
  index: number;
}
export const Description = ({ item, index }: Item) => {
  const { removeFavorite, addFavorite, favorite } = useFavorite();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const favoritePage = location.pathname === "/favorites";
  const isFavorite = favorite.some((itemFav) => itemFav.name === item.name);
  const isLogin = useSelector(userSelector);

  const hendalControl = () => {
    if (!isLogin || isLogin.name === "") {
      alert("Sorry,you need autorotation");
    } else {
      handleToggleFavorite();
    }
  };

  const handleToggleFavorite = () => {
    if (favoritePage) {
      removeFavorite(item);
    } else {
      if (isActive) {
        removeFavorite(item);
      } else {
        addFavorite(item, index);
      }
      setIsActive(!isActive);
    }
  };

  return (
    <div className=" tablet:flex">
      <p className="text-[#8A8A89] mobil:flex mobil:justify-center mobil:my-[10px] ">
        Psychologist
      </p>
      <div className="flex  ml-[auto] relative">
        <svg className="w-[16px] h-[16px]  absolute top-[15px] left-[-25px]  tablet:top-[5px] tablet:left-[-20px]">
          <use xlinkHref={icon + "#icon-star"}></use>
        </svg>
        <p className="font-medium">Rating {item.rating}</p>
        <div className="h-[16px] border borded-[#191A15] mr-[16px] ml-[16px] flex items-center"></div>
        <p className="font-medium">
          Price / 1 hour
          <span className="text-[#38CD3E]">{item.price_per_hour}$</span>
        </p>

        <button onClick={() => hendalControl()}>
          <svg
            className={clsx(
              "w-[26px] h-[26px] fill-[#fff]  stroke-black ml-[28px]",
              favoritePage
                ? "active"
                : isActive || isFavorite
                ? "active"
                : " fill-[#fff]  stroke-black ml-[28px]"
            )}
          >
            <use xlinkHref={icon + "#heart"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
