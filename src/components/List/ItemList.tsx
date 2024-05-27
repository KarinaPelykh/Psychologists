import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
import { Description } from "./Description";
import { InfoAboutPsycholog } from "./InfoAboutPsycholog";
import { ReviewList } from "./ReviewList";

interface Item {
  item: Psychology;
  handeladdFavorte: () => void;
  index: number;
}
export const ItemList = ({ item, handeladdFavorte, index, visible }: Item) => {
  return (
    <li className="  flex h-[auto] w-[auto] p-[24px] bg-[#FBFBFB] rounded-[24px] mt-[32px] last:mb-[64px]">
      <div className="p-[12px] border border-[#fc832c96] w-[120px] h-[120px] rounded-[15px] relative">
        <svg className="w-[14px] h-[14px] absolute  left-[94px]">
          <use xlinkHref={icon + "#online"}></use>
        </svg>
        <img
          className="w-[96px] h-[96px] rounded-[15px]"
          src={item.avatar_url}
          alt="avatar"
        />
      </div>

      <div className="w-[992px] ml-[24px]">
        <Description
          item={item}
          handeladdFavorte={handeladdFavorte}
          index={index}
          visible={visible}
        />
        <div>
          <p className="text-[24px] font-medium mb-[24px]">{item.name}</p>
          <InfoAboutPsycholog item={item} />
        </div>

        <p className="font-normal text-base leading-[1.25 ] text-[#191a1580]">
          {item.about}
        </p>

        <ReviewList item={item} />
      </div>
    </li>
  );
};
