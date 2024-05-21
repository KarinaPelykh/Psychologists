import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
interface Item {
  item: Psychology;
}
export const Description = ({ item }: Item) => {
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
          Price / 1 hour{" "}
          <span className="text-[#38CD3E]">{item.price_per_hour}$</span>
        </p>
        <svg className="w-[26px] h-[26px] fill-[#fff]  stroke-black ml-[28px]">
          <use xlinkHref={icon + "#heart"}></use>
        </svg>
      </div>
    </div>
  );
};
