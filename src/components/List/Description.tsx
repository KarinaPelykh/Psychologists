import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
import clsx from "clsx";
interface Item {
  item: Psychology;
  handeladdFavorte: () => void;
  active: boolean;
  index: number;
}
export const Description = ({
  item,
  handeladdFavorte,
  index,
  visible,
}: Item) => {
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
        <button onClick={() => handeladdFavorte(item, index)}>
          <svg
            className={clsx(
              "w-[26px] h-[26px] fill-[#fff]  stroke-black ml-[28px]",

              visible === index
                ? "fill-[#FC832C] stroke-[#FC832C]"
                : " fill-[#fff]  stroke-black"
            )}
          >
            <use xlinkHref={icon + "#heart"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
