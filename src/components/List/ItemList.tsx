import { useState } from "react";
import icon from "../../images/sprite.svg";
import { Psychology } from "../../type/Psycholog";
import { Description } from "./Description";
import { InfoAboutPsycholog } from "./InfoAboutPsycholog";
import { ReviewList } from "./ReviewList";
import clsx from "clsx";

interface Item {
  item: Psychology;
  index: number;
}
export const ItemList = ({ item, index }: Item) => {
  const [open, setOpen] = useState(true);
  return (
    <li className="  p-[24px] bg-[#FBFBFB] rounded-[24px] mt-[32px] last:mb-[64px] tablet:flex">
      <div className="p-[12px] border border-[#fc832c96] w-[120px] h-[120px] rounded-[15px] relative mobil:flex mobil:mx-[auto] tablet:mx-[0px] tablet:block">
        <svg className="w-[14px] h-[14px] absolute  left-[94px]">
          <use xlinkHref={icon + "#online"}></use>
        </svg>
        <img
          className="w-[96px] h-[96px] rounded-[15px]"
          src={item.avatar_url}
          alt="avatar"
        />
      </div>

      <div className="desktop:w-[992px] ml-[24px]">
        <Description item={item} index={index} />
        <div>
          <p className="text-[24px] font-medium mb-[24px]">{item.name}</p>
          <InfoAboutPsycholog item={item} />
        </div>
        <div className={clsx(open ? "close" : "", "tablet:block ")}>
          <p className="mobil:text-[14px]  font-normal text-base leading-[1.25 ] text-[#191a1580]">
            {item.about}
          </p>
        </div>
        <button
          className="mr-[20px] tablet:hidden"
          onClick={() => setOpen(!open)}
        >
          Показати
        </button>

        <ReviewList item={item} />
      </div>
    </li>
  );
};
