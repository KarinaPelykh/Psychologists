import { useState } from "react";
import { useFavorite } from "../Context/useContext";
import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
interface Item {
  item: Psychology;
  index: number;
}
export const Description = ({ item, index }: Item) => {
  const { removeFavorite, addFavorite } = useFavorite();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const favoritePage = location.pathname === "/favorites";

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
    <div className="flex ">
      <p className="text-[#8A8A89]">Psychologist</p>
      <div className="flex  ml-[auto] relative">
        <svg className="w-[16px] h-[16px]  absolute top-[5px] left-[-20px]">
          <use xlinkHref={icon + "#icon-star"}></use>
        </svg>
        <p className="font-medium">Rating {item.rating}</p>
        <div className="h-[16px] border borded-[#191A15] mr-[16px] ml-[16px] flex items-center"></div>
        <p className="font-medium">
          Price / 1 hour
          <span className="text-[#38CD3E]">{item.price_per_hour}$</span>
        </p>

        <button onClick={() => handleToggleFavorite()}>
          <svg
            className={clsx(
              "w-[26px] h-[26px] fill-[#fff]  stroke-black ml-[28px]",
              favoritePage
                ? "active"
                : isActive
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
